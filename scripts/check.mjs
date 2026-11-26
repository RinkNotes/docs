// check.mjs — keeps the RinkNotes docs "Sesame Street simple" and true to the apps.
//
//   deno run --allow-read --allow-env docs-site/scripts/check.mjs          (from the Lineups repo root)
//   deno run --allow-read --allow-env scripts/check.mjs                    (from docs-site/)
//
// The rule set is the RN Video tester guide's (videoStream docs/testers/check.mjs), made for MDX pages.
// It fails when:
//   FRONT     a page lacks a title phrased as a question, a short sidebarTitle, or a one-line description
//   ANSWER    a page doesn't open with a two-line answer before its first heading or component
//   STEP      a <Step> doesn't open with exactly one action (one sentence, no "then", no "and tap"),
//             or a line under it runs past two sentences
//   LENGTH    a sentence has more than 20 words; or more than 15 % of sentences have more than 12
//   GRADE     the docs' reading level (Flesch-Kincaid) is above grade 5
//   JARGON    a banned word appears in the docs' own words (bold words are the apps')
//   BUTTON    a bold word isn't a known on-screen word: the apps' own (found in their sources as written,
//             or by the needle listed below where the source builds it), or a word of iOS, macOS,
//             TestFlight or another site (YouTube, Facebook, Vimeo) listed below
//   COMING    something not built is named without the word "Coming" beside it
//   SITE      a script or remote picture, a link to another site, a TestFlight link, or an email other
//             than rinknotes@wispera.ai
//   DRAW      a drawing (<S2_10 />) that isn't imported, an import of a drawing that doesn't exist or
//             isn't used, or a word ringed as "tap here" in a drawing that isn't in RN Video's source
//   NAV       a page in docs.json has no file, or a page has no place in docs.json
//   REAL      a real child's, team's or rink's name from the private list (never kept in this folder)
//
// The apps' sources are read from RINKNOTES_VIDEO_APP (default ~/Documents/videoStream/app) and
// RINKNOTES_LINEUPS_APP (default ../app beside this folder). Where a source isn't there, BUTTON only
// checks that the word is listed, and says so. The private list of real names is RINKNOTES_REAL_NAMES
// (default ../debug/real-names.txt in the Lineups checkout), one name per line.

const here = new URL("../", import.meta.url); // docs-site/
const env = (k) => { try { return Deno.env.get(k); } catch { return undefined; } };
const home = env("HOME") ?? "";

async function exists(p) { try { await Deno.stat(p); return true; } catch { return false; } }
async function* filesUnder(dir, keep) {
  for await (const e of Deno.readDir(dir)) {
    const p = `${dir}/${e.name}`;
    if (e.isDirectory) { if (!["node_modules", ".git", ".mint", "Tests", "build", "DerivedData"].includes(e.name)) yield* filesUnder(p, keep); }
    else if (keep(e.name)) yield p;
  }
}

// ---------- The pages ----------
const root = decodeURIComponent(here.pathname).replace(/\/$/, "");
const pages = [];
for await (const f of filesUnder(root, (n) => n.endsWith(".mdx") || n.endsWith(".md"))) {
  const rel = f.slice(root.length + 1);
  if (rel.startsWith("scripts/") || /^readme\.md$/i.test(rel)) continue;
  pages.push({ rel, src: await Deno.readTextFile(f) });
}
pages.sort((a, b) => a.rel.localeCompare(b.rel));

// ---------- The apps' sources ----------
const videoApp = env("RINKNOTES_VIDEO_APP") ?? `${home}/Documents/videoStream/app`;
const lineupsApp = env("RINKNOTES_LINEUPS_APP") ?? `${root}/../app`;
async function readSources(dir) {
  if (!(await exists(dir))) return null;
  let t = "";
  for await (const f of filesUnder(dir, (n) => n.endsWith(".swift") || n.endsWith(".plist") || n.endsWith(".strings"))) {
    if (f.includes("/Tests/") || f.includes("UITests") || f.includes("/Debug/")) continue;
    t += (await Deno.readTextFile(f)) + "\n";
  }
  return t;
}
const videoText = await readSources(videoApp);
const lineupsText = await readSources(lineupsApp);

// On-screen words of RN Video (value: the text that must be in its source, as written).
const VIDEO = {
  "Game": "Game", "Stream": "Stream", "Moments": "Moments", "Skills": "Skills", "Start recording": "Start recording",
  "Ready": "Ready", "Refocus": "Refocus", "1x": "1x", "2x": "2x", "Telephoto": "Telephoto",
  "Start warm-up": "Start warm-up", "Start P1": "Start \\(", "Start P2": "Start \\(", "Resume P1": "Resume \\(",
  "Hold to end P1": "Hold to end \\(", "Hold to refocus": "Hold to refocus", "MARK": "MARK",
  "Home save": "Home save", "Away save": "Away save", "Goal for": "Goal for", "Goal against": "Goal against",
  "Game over": "Game over", "Yes, the game is over": "Yes, the game is over", "Fix the score first": "Fix the score first",
  "Continue": "Continue",
  "Save": "Save", "Other": "Other", "Glove": "Glove", "All to Home": "All to Home", "Suggest moments": "Suggest moments",
  "Keep as a save": "Keep as a save", "Skip": "Skip", "Slow motion": "Slow motion", "Details": "Details",
  "Reel ›": "Reel ›", "Reel": "Reel", "Game reel": "Game reel", "Goalie reel": "Goalie reel", "9:16": "9:16", "16:9": "16:9",
  "Reel settings": "Reel settings", "Remove nearby voices": "Remove nearby voices", "Off": "Off",
  "Export the game reel": "Export the ", "Export the goalie reel": "Export the ",
  "Save to Photos": "Save to Photos", "Share…": "Share…", "Export the highlight pack…": "Export the highlight pack…",
  "Export": "Export", "Export game reel…": "Export ", "Choose": "Choose", "Show in Finder": "Show in Finder",
  "1080p copy…": "1080p copy…", "P2 starts here (2)": "starts here (\\(",
  "Delete from this iPhone…": "Delete from this \\(", "Delete from this iPad…": "Delete from this \\(",
  "Where it goes": "Where it goes", "YouTube": "YouTube", "Facebook": "Facebook", "Page": "Page", "Group": "Group",
  "Another stream address": "Another stream address", "Go live": "Go live",
};
// On-screen words of Lineups.
const LINEUPS = {
  "Get started": "Get started", "Continue": "Continue", "+ Add team": "+ Add team", "From screenshots": "From screenshots",
  "Add 18 players": "Add \\(", "Say it": "Say it", "Home": "\"Home\"", "Away": "\"Away\"", "Set the lines": "Set the lines",
  "Fill by position": "Fill by position", "Start game ›": "Start game ›", "Start later": "Start later", "Got it": "Got it",
  "Save note": "Save note", "Type instead": "Type instead", "Go to my teams": "Go to my teams",
  "Update my Wolves U13 A": "Update my \\(",
};
// Words of iOS, macOS, the App Store and TestFlight (not the apps'), allowed in bold.
const SYSTEM = new Set([
  "Get", "Accept", "Install", "Open", "Allow", "View in TestFlight", "Automatic Updates", "Do Not Disturb",
  "Paste", "Save to Files", "Choose a Shortcut", "Double Tap", "Triple Tap", "Portrait Orientation Lock",
  "TestFlight", "Share", "Share Beta Feedback", "Submit", "Send Beta Feedback",
]);
// Words on other sites, as those sites show them, allowed in bold. They can't be checked here.
const THIRD = new Set([
  "Create", "Unlisted", // YouTube Studio ("Go live" and "Stream" are also RN Video's words)
  "Go Live",            // Facebook and Vimeo
  "Use an external encoder", "RTMP/RTMPS", // Vimeo
]);

const JARGON = [
  "package", "packages", "manifest", "detector", "detection", "detections", "rollover", "z-score", "checksum",
  "checksums", "hash", "hashes", "sidecar", "metadata", "inference", "algorithm", "algorithms", "model", "models",
  "codec", "hevc", "h.264", "bitrate", "framerate", "fps", "resolution", "sandbox", "entitlement", "api", "sdk",
  "json", "csv", "dockkit", "neural", "machine learning", "transcribe", "transcription", "upscale",
  "utility", "configure", "configuration", "interface", "toggle", "initialize", "parameter", "default",
  "functionality", "optimize", "via", "utilize", "commence", "terminate", "subsequently", "aspect ratio",
];
// Not built yet: wherever one is named, "Coming" must be in the same line.
const NOT_BUILT = [
  /straight to TikTok|straight to Instagram|right from the app/i,
  /\btag(s|ging)? (the )?(plays|goals)\b.*\b(watch|live)|\bmark moments as they watch/i,
  /notes on moments|coach review/i,
  /player'?s own reel|\bplayer reels?\b/i,
  /play-by-play|second phone/i,
  /\b(3|three|more) angles\b/i,
];
const ALLOWED_HOSTS = new Set(["rinknotes.app", "docs.rinknotes.app"]);

// ---------- Real names (private list) ----------
const realPath = env("RINKNOTES_REAL_NAMES") ?? `${root}/../debug/real-names.txt`;
let REAL = [];
if (await exists(realPath)) {
  REAL = (await Deno.readTextFile(realPath)).split("\n").map((s) => s.trim()).filter((s) => s && !s.startsWith("#"));
}

// ---------- Reading the MDX ----------
const problems = [];
const say = (rule, where, msg) => problems.push(`[${rule}] ${where}: ${msg}`);

function frontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return [{}, src];
  const fm = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"(.*)"$/, "$1");
  }
  return [fm, src.slice(m[0].length)];
}
const plain = (s) => s
  .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")   // links
  .replace(/\*\*([^*]+)\*\*/g, "$1")         // bold
  .replace(/`([^`]*)`/g, "$1")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/g, " ")
  .replace(/\s+/g, " ").trim();
const noBold = (s) => s.replace(/\*\*[^*]+\*\*/g, " ").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/<[^>]+>/g, " ");

function splitSentences(t) {
  return t.split(/(?<=[.!?])\s+(?=[A-Z0-9"“‘(])/).map((s) => s.trim()).filter((s) => /[A-Za-z0-9]/.test(s));
}
const words = (s) => s.replace(/[“”"()…]/g, " ").split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w));
function syllables(w) {
  w = w.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 1;
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
  const m = w.match(/[aeiouy]{1,2}/g);
  return Math.max(1, m ? m.length : 1);
}

let nSent = 0, nWords = 0, nSyl = 0, long12 = 0, nSteps = 0;
const perPage = [];
const boldSeen = new Map(); // label -> first page
const ACTION_EXTRA = /\bthen\b|,? and (tap|click|pick|press|type|choose|open)\b/i;

for (const { rel, src } of pages) {
  const [fm, body] = frontmatter(src);
  // FRONT
  if (!fm.title) say("FRONT", rel, "no title");
  else if (!fm.title.endsWith("?")) say("FRONT", rel, `the title isn't a question: "${fm.title}"`);
  if (!fm.sidebarTitle) say("FRONT", rel, "no sidebarTitle");
  else if (words(fm.sidebarTitle).length > 7) say("FRONT", rel, `sidebarTitle of ${words(fm.sidebarTitle).length} words`);
  if (!fm.description) say("FRONT", rel, "no description");
  else if (fm.description.length > 160) say("FRONT", rel, `description of ${fm.description.length} characters (at most 160)`);

  // ANSWER: the first block is two lines of plain text.
  const blocks = body.split(/\n\s*\n/).map((b) => b.trim()).filter((b) => b && !/^import /.test(b));
  const first = blocks[0] ?? "";
  if (/^(#|<|-|\||import )/.test(first) || first.split("\n").length !== 2) {
    say("ANSWER", rel, "doesn't open with a two-line answer");
  }

  // SITE
  if (/<script|<img[^>]+src="https?:/i.test(src)) say("SITE", rel, "a script or a remote picture");
  if (/testflight\.apple\.com/i.test(src)) say("SITE", rel, "a TestFlight link (they live only in the tester guides on rinknotes.app)");
  for (const u of src.match(/https?:\/\/[^\s)"'<>]+/g) ?? []) {
    const host = new URL(u).hostname;
    if (!ALLOWED_HOSTS.has(host)) say("SITE", rel, `a link to another site: ${u}`);
  }
  for (const e of src.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}/g) ?? []) {
    if (e !== "rinknotes@wispera.ai") say("SITE", rel, `an email other than rinknotes@wispera.ai: ${e}`);
  }

  // REAL
  for (const n of REAL) if (src.toLowerCase().includes(n.toLowerCase())) say("REAL", rel, "names someone or somewhere on the private list of real names");

  // STEP
  for (const m of body.matchAll(/<Step\s+title="([^"]*)"[^>]*>([\s\S]*?)<\/Step>/g)) {
    nSteps++;
    const [, title, inner] = m;
    if (words(title).length > 6) say("STEP", rel, `step title of ${words(title).length} words: "${title}"`);
    const paras = inner.split(/\n\s*\n/).map((p) => plain(p)).filter(Boolean);
    if (!paras.length) { say("STEP", rel, `"${title}": no action`); continue; }
    const act = paras[0];
    if (splitSentences(act).length !== 1) say("STEP", rel, `"${title}": the action is more than one sentence: "${act}"`);
    if (ACTION_EXTRA.test(noBold(inner.split(/\n\s*\n/)[0]))) say("STEP", rel, `"${title}": more than one action: "${act}"`);
    for (const p of paras.slice(1)) if (splitSentences(p).length > 2) say("STEP", rel, `"${title}": a line of more than two sentences`);
  }

  // Prose units: paragraphs, list items, table cells, step bodies, callouts. Headings checked for length only.
  const units = [];
  for (const raw of body.split("\n")) {
    let line = raw.trim();
    if (!line || line.startsWith("|---") || /^\| ?-/.test(line)) continue;
    if (/^import /.test(line) || /^<[A-Z]\w* \/>$/.test(line)) continue;
    if (/^<\/?(Steps|CardGroup|Note|Tip|Warning|Info)\b[^>]*>$/.test(line) || /^<\/(Step|Card)>$/.test(line)) continue;
    const step = line.match(/^<Step\s+title="([^"]*)"/);
    if (step) { units.push({ head: true, text: step[1] }); continue; }
    const card = line.match(/^<Card\s+title="([^"]*)"/);
    if (card) { units.push({ head: true, text: card[1] }); continue; }
    if (line.startsWith("#")) { units.push({ head: true, text: line.replace(/^#+\s*/, "") }); continue; }
    if (line.startsWith("|")) { for (const c of line.split("|").map((x) => x.trim()).filter(Boolean)) units.push({ text: c, raw: c }); continue; }
    line = line.replace(/^[-*]\s+/, "");
    units.push({ text: plain(line), raw: line });
  }
  let pSent = 0, pWords = 0, pSyl = 0;
  for (const u of units) {
    for (const s of splitSentences(u.text)) {
      const ws = words(s);
      if (u.head) { if (ws.length > 12) say("LENGTH", rel, `heading of ${ws.length} words: "${s}"`); continue; }
      nSent++; nWords += ws.length; pSent++; pWords += ws.length;
      for (const w of ws) { const y = syllables(w); nSyl += y; pSyl += y; }
      if (ws.length > 20) say("LENGTH", rel, `${ws.length} words: "${s}"`);
      if (ws.length > 12) long12++;
    }
    if (u.head) continue;
    // JARGON (outside bold)
    const t = " " + noBold(u.raw).toLowerCase().replace(/\s+/g, " ") + " ";
    for (const j of JARGON) {
      const re = new RegExp(`(^|[^a-z0-9-])${j.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[^a-z0-9-])`);
      if (re.test(t)) say("JARGON", rel, `"${j}" in: "${u.text.slice(0, 90)}"`);
    }
    // COMING
    for (const r of NOT_BUILT) if (r.test(u.text) && !/\bcoming\b/i.test(u.text)) say("COMING", rel, `not built, and not marked Coming: "${u.text.slice(0, 90)}"`);
    // BUTTON
    for (const b of u.raw.matchAll(/\*\*([^*]+)\*\*/g)) {
      const label = b[1].trim();
      if (label.endsWith(":")) continue; // a label for a line, not a button
      if (SYSTEM.has(label) || THIRD.has(label)) continue;
      if (!boldSeen.has(label)) boldSeen.set(label, rel);
    }
  }
  const pGrade = pSent ? 0.39 * (pWords / pSent) + 11.8 * (pSyl / pWords) - 15.59 : 0;
  perPage.push(`${rel}: grade ${pGrade.toFixed(1)}`);
}

// BUTTON: each known word must be in its app's source.
const unchecked = [];
for (const [label, rel] of boldSeen) {
  const needles = [];
  if (label in VIDEO) needles.push([VIDEO[label], videoText, "RN Video"]);
  if (label in LINEUPS) needles.push([LINEUPS[label], lineupsText, "Lineups"]);
  if (!needles.length) needles.push([label, videoText, "RN Video"], [label, lineupsText, "Lineups"]);
  if (needles.some(([, text]) => text === null)) { unchecked.push(label); continue; }
  if (!needles.some(([n, text]) => text.includes(n))) say("BUTTON", rel, `"${label}" isn't in ${needles.map((x) => x[2]).join(" or ")}'s source (or list it, with its needle)`);
}

// DRAW: drawings come from snippets/video/<section>.jsx (made by drawings.mjs) and snippets/lineups/<section>.jsx
// (made by lineups-drawings.mjs). A ringed word must be in the source of the app the drawing is of.
const snippetCache = new Map();
async function snippet(path) {
  if (!snippetCache.has(path)) snippetCache.set(path, (await exists(`${root}${path}`)) ? await Deno.readTextFile(`${root}${path}`) : null);
  return snippetCache.get(path);
}
const DRAWN_OK = new Set([...SYSTEM, ...THIRD]); // a ring may sit on iOS's own buttons too
// Ringed words the source builds from parts (value: the text that must be in RN Video's source).
const DRAWN_NEEDLE = {
  "Delete 15 clips": "Delete \\(", "Next drill: Shuffle": "Next drill: \\(",
  "P2 starts here (2)": "starts here (\\(", "Keep as a save (K)": "\"Keep as a save\", \"K\"",
};
const tapChecked = new Set();
for (const { rel, src } of pages) {
  const [, body] = frontmatter(src);
  const imported = new Map(); // name -> file
  for (const m of body.matchAll(/^import \{([^}]*)\} from "([^"]+)";?$/gm)) {
    const file = await snippet(m[2]);
    if (file === null) { say("DRAW", rel, `imports from ${m[2]}, which isn't there`); continue; }
    for (const n of m[1].split(",").map((x) => x.trim()).filter(Boolean)) {
      if (!new RegExp(`^export const ${n} = `, "m").test(file)) say("DRAW", rel, `${m[2]} has no drawing ${n}`);
      imported.set(n, m[2]);
    }
  }
  const used = new Set([...body.matchAll(/<([A-Z]\w*) \/>/g)].map((m) => m[1]));
  for (const n of used) if (!imported.has(n)) say("DRAW", rel, `<${n} /> isn't imported`);
  for (const [n, f] of imported) {
    if (!used.has(n)) { say("DRAW", rel, `${n} is imported and not shown`); continue; }
    const key = `${f}#${n}`;
    const isLineups = f.startsWith("/snippets/lineups/");
    const appText = isLineups ? lineupsText : videoText;
    if (tapChecked.has(key) || appText === null) continue;
    tapChecked.add(key);
    const file = await snippet(f);
    const jsx = file.slice(file.indexOf(`export const ${n} = `)).split(/\n\);\n/)[0];
    for (const t of jsx.matchAll(/className="[^"]*\btap\b[^"]*"[^>]*>([^<{]+)</g)) {
      const word = t[1].replace(/[✓☑›‹]/g, "").replace(/^\+\s*/, "").trim();
      if (!word || DRAWN_OK.has(word) || /^[−+✎⋯<>#\d\s.:%·–-]+$/.test(word)) continue;
      const needle = (isLineups ? LINEUPS[word] : VIDEO[word]) ?? DRAWN_NEEDLE[word] ?? word;
      if (!appText.includes(needle)) say("DRAW", rel, `${n} rings "${word}", which isn't in ${isLineups ? "Lineups" : "RN Video"}'s source`);
    }
  }
}

// NAV
const nav = JSON.parse(await Deno.readTextFile(`${root}/docs.json`));
const listed = new Set();
const walkNav = (n) => {
  if (Array.isArray(n)) return n.forEach(walkNav);
  if (typeof n === "string") return listed.add(n);
  if (n && typeof n === "object") for (const k of ["groups", "pages", "tabs", "anchors"]) if (n[k]) walkNav(n[k]);
};
walkNav(nav.navigation);
for (const p of listed) if (!pages.some((x) => x.rel.replace(/\.mdx?$/, "") === p)) say("NAV", "docs.json", `"${p}" has no page`);
for (const x of pages) if (!listed.has(x.rel.replace(/\.mdx?$/, ""))) say("NAV", x.rel, "isn't in docs.json's navigation");

// LENGTH and GRADE over all pages
const share12 = nSent ? long12 / nSent : 0;
if (share12 > 0.15) say("LENGTH", "all pages", `${(share12 * 100).toFixed(1)} % of sentences have more than 12 words (at most 15 %)`);
const grade = 0.39 * (nWords / nSent) + 11.8 * (nSyl / nWords) - 15.59;
if (grade > 5) say("GRADE", "all pages", `reading level is grade ${grade.toFixed(1)} (at most 5)`);

// ---------- Report ----------
console.log(`pages ${pages.length} · steps ${nSteps} · sentences ${nSent} · words ${nWords} · grade ${grade.toFixed(1)} · over 12 words ${long12} (${(share12 * 100).toFixed(1)} %)`);
if (Deno.args.includes("--pages")) for (const l of perPage) console.log("  " + l);
if (!REAL.length) console.log(`warn: no private list of real names at ${realPath}; REAL wasn't checked`);
if (unchecked.length) console.log(`warn: an app's source wasn't found, so these weren't checked against it: ${unchecked.join(", ")}`);
if (problems.length) {
  for (const p of problems) console.log(p);
  console.log(`check: ${problems.length} problem(s)`);
  Deno.exit(1);
}
console.log("check: clean");
