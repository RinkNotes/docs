#!/bin/bash
# check-public.sh: run before every push of docs-site/ to the public RinkNotes/docs repo.
#
#   docs-site/scripts/check-public.sh            (from anywhere in the Lineups repo)
#
# It builds exactly what `git subtree push --prefix docs-site docs main` would send (git subtree split),
# and fails on any of these, in any file of any commit it would send, and in those commits' messages
# and author and committer lines:
#   OUTSIDE   a symlink or submodule (something that points outside docs-site/), or a split tree that
#             isn't HEAD:docs-site
#   VIDEO     a video file (by name or by its first bytes), or a path into the footage folder
#   SECRET    the shape of a key, token or private key
#   EMAIL     an email address other than rinknotes@wispera.ai (the one exception: Anthropic's noreply
#             address in a Co-Authored-By trailer, in commit messages only)
#   TESTFLIGHT a link to TestFlight's join pages (they live only in the tester guides on rinknotes.app)
#   REAL      a name on the private list of real names: RINKNOTES_REAL_NAMES, by default
#             debug/real-names.txt in the Lineups checkout (never in docs-site/). With no list, it fails.
#
# It sends nothing, and makes no branch or ref. Exit 0 means clean.

set -uo pipefail
export LC_ALL=C

PREFIX=docs-site
top=$(git rev-parse --show-toplevel) || exit 2
cd "$top" || exit 2
common=$(git rev-parse --path-format=absolute --git-common-dir)
names=${RINKNOTES_REAL_NAMES:-"$common/../debug/real-names.txt"}

# Problems go to a file, so a check run inside a pipeline (a subshell) still counts.
found=$(mktemp -t check-public-found) || exit 2
seen=$(mktemp -t check-public-seen) || exit 2
trap 'rm -f "$found" "$seen"' EXIT
fail() { echo "[$1] $2" | tee -a "$found"; }

if [[ ! -s "$names" ]]; then
  echo "[REAL] no private list of real names at $names (one name per line; it stays outside docs-site/)"
  exit 1
fi

if [[ -n "$(git status --porcelain -- "$PREFIX")" ]]; then
  echo "note: docs-site/ has uncommitted changes. They aren't pushed, and weren't checked."
fi

split=$(git subtree split --prefix "$PREFIX" HEAD 2>/dev/null) || { echo "[OUTSIDE] git subtree split failed"; exit 1; }
if [[ "$(git rev-parse "$split^{tree}")" != "$(git rev-parse "HEAD:$PREFIX")" ]]; then
  fail OUTSIDE "the split's tree isn't HEAD:$PREFIX"
fi

# Patterns. Each is written so that it doesn't match its own text here.
secret_re='(sk|rk|pk)_(live|test)_[A-Za-z0-9]{8,}|whsec_[A-Za-z0-9+/=]{16,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|AKIA[0-9A-Z]{16}|gh[pousr]_[A-Za-z0-9]{30,}|xox[abprs]-[A-Za-z0-9-]{10,}|eyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}|AIza[0-9A-Za-z_-]{35}|(secret|token|api[_-]?key|password|passwd)["'"'"']?[[:space:]]*[:=][[:space:]]*["'"'"'][A-Za-z0-9+/=_-]{16,}'
email_re='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}'
tf_re='testflight\.apple\.com'
video_name_re='\.(mp4|m4v|mov|avi|mkv|webm|hevc|3gp|mts|m2ts|insv|lrv)$'

scan_text() { # $1 where, stdin: text
  local where=$1 text
  text=$(cat)
  grep -Eq "$secret_re" <<<"$text" && fail SECRET "$where"
  grep -q 'video''Projects' <<<"$text" && fail VIDEO "$where: a footage folder's path"
  grep -Eiq "$tf_re" <<<"$text" && fail TESTFLIGHT "$where"
  local e
  while read -r e; do
    [[ -z "$e" || "$e" == "rinknotes@wispera.ai" ]] && continue
    fail EMAIL "$where: $e"
  done < <(grep -Eo "$email_re" <<<"$text" | sort -u)
  local n
  while IFS= read -r n; do
    [[ -z "$n" || "$n" == \#* ]] && continue
    grep -Fqi -- "$n" <<<"$text" && fail REAL "$where: a name on the private list"
  done < "$names"
}

# Commits already on the public repo (the docs remote's main) are public already, so only the ones a push would
# add are checked. Without that ref, every commit is checked (D674).
if git rev-parse -q --verify refs/remotes/docs/main >/dev/null; then
  commits=$(git rev-list "$split" --not refs/remotes/docs/main)
else
  commits=$(git rev-list "$split")
fi
count=0
for c in $commits; do
  count=$((count + 1))
  short=${c:0:9}
  for who in "$(git log -1 --format='%ae' "$c")" "$(git log -1 --format='%ce' "$c")"; do
    [[ "$who" == "rinknotes@wispera.ai" ]] || fail EMAIL "commit $short: author or committer $who"
  done
  git log -1 --format='%an%n%cn%n%B' "$c" | grep -v '^Co-Authored-By: .*<noreply@anthropic\.com>$' | scan_text "commit $short's message"
  while read -r mode type sha path; do
    case "$mode" in
      120000) fail OUTSIDE "commit $short: $path is a symlink"; continue ;;
      160000) fail OUTSIDE "commit $short: $path is a submodule"; continue ;;
    esac
    [[ "$type" == blob ]] || continue
    grep -qx "$sha" "$seen" && continue
    echo "$sha" >> "$seen"
    shopt -s nocasematch
    [[ "$path" =~ $video_name_re ]] && fail VIDEO "$path (commit $short): a video file"
    shopt -u nocasematch
    head4=$(git cat-file -p "$sha" | head -c 12 | xxd -p | tr -d '\n')
    [[ "${head4:8:8}" == "66747970" ]] && fail VIDEO "$path (commit $short): starts like an MP4 or MOV"
    [[ "${head4:0:8}" == "1a45dfa3" ]] && fail VIDEO "$path (commit $short): starts like a WebM or MKV"
    git cat-file -p "$sha" | scan_text "$path (commit $short)"
  done < <(git ls-tree -r --full-tree "$c")
done

files=$(git ls-tree -r --name-only "$split" | wc -l | tr -d ' ')
echo "checked $count commit(s) and $(wc -l < "$seen" | tr -d ' ') file version(s); $files file(s) in the tree that would be pushed"
problems=$(wc -l < "$found" | tr -d ' ')
if (( problems )); then
  echo "check-public: $problems problem(s). Nothing may be pushed."
  exit 1
fi
echo "check-public: clean"
