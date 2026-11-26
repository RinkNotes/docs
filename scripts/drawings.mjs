// drawings.mjs: turns the drawn screens in RN Video's tester guide into Mintlify snippets.
//
//   deno run --allow-read --allow-write --allow-env docs-site/scripts/drawings.mjs <guide.html> <section>...
//
// <guide.html> is videoStream's docs/testers/index.html. Each <section> is a guide section id
// (record, stream, reel …). For each one it writes snippets/video/<section>.jsx, with one component
// per step that has a drawing: step s2-10 becomes <S2_10 />. It also writes drawings.css, the guide's
// drawing styles, each rule scoped under .rn-shot so nothing else in the docs changes.
//
// The drawings are copied, not redrawn: the same markup, classes, words and screen-reader labels.
// The icon sprites (<use href="#i-…">) are copied into each drawing, since a snippet can't see the
// guide's sprite sheet. Files it writes say so at the top; don't edit them by hand.

const [guidePath, ...sections] = Deno.args;
if (!guidePath || !sections.length) {
  console.error("usage: drawings.mjs <guide.html> <section>...");
  Deno.exit(2);
}
const here = new URL("..", import.meta.url).pathname; // docs-site/
const html = await Deno.readTextFile(guidePath);
const build = (html.match(/version 0\.1 \((\d+)\)/) || [])[1] || "?";

// ---------- The icon sprites ----------
const symbols = {};
for (const m of html.matchAll(/<symbol id="([\w-]+)"([^>]*)>([\s\S]*?)<\/symbol>/g)) symbols[m[1]] = { attrs: m[2], body: m[3] };
const inlineSprites = (s) =>
  s.replace(/<svg([^>]*)>\s*<use href="#([\w-]+)"\s*\/>\s*<\/svg>/g, (all, attrs, id) => {
    const sym = symbols[id];
    if (!sym) throw new Error(`no symbol #${id}`);
    return `<svg${attrs}${sym.attrs} aria-hidden="true">${sym.body}</svg>`;
  });

// ---------- HTML to JSX ----------
const VOID = new Set(["br", "hr", "img", "input", "wbr", "meta", "link"]);
const ATTR = { class: "className", for: "htmlFor", tabindex: "tabIndex", colspan: "colSpan", rowspan: "rowSpan", viewbox: "viewBox" };
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const attrName = (n) => {
  const l = n.toLowerCase();
  if (ATTR[l]) return ATTR[l];
  if (l.startsWith("aria-") || l.startsWith("data-")) return l;
  return n.includes("-") ? camel(n) : n;
};
const jsString = (s) => JSON.stringify(s);
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const styleObject = (css) => {
  const parts = [];
  let depth = 0, cur = "";
  for (const ch of css) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && !depth) { parts.push(cur); cur = ""; } else cur += ch;
  }
  parts.push(cur);
  const props = parts.map((p) => p.trim()).filter(Boolean).map((p) => {
    const i = p.indexOf(":");
    const k = p.slice(0, i).trim(), v = p.slice(i + 1).trim();
    const key = k.startsWith("--") ? jsString(k) : camel(k.replace(/^-ms-/, "ms-"));
    return `${key}: ${jsString(v)}`;
  });
  return `{{ ${props.join(", ")} }}`;
};
// Mintlify renames some class names in pages (it turns "s" into "mint-s"), so those get a prefix of
// our own, in the markup and the styles alike.
const RENAME = { s: "rn-s" };
const renameClasses = (v) => v.split(/\s+/).map((c) => RENAME[c] ?? c).join(" ");
const renameSelector = (sel) => sel.replace(/\.([\w-]+)/g, (all, c) => (RENAME[c] ? `.${RENAME[c]}` : all));
const attrsToJsx = (raw) => {
  const out = [];
  for (const m of raw.matchAll(/([^\s=\/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
    const name = m[1];
    const val = m[2] ?? m[3] ?? m[4];
    if (name.toLowerCase() === "style") { out.push(`style=${styleObject(decode(val))}`); continue; }
    const n = attrName(name);
    if (n === "className") { out.push(`className=${jsString(renameClasses(decode(val)))}`); continue; }
    out.push(val === undefined ? n : `${n}=${jsString(decode(val))}`);
  }
  return out.length ? " " + out.join(" ") : "";
};
const text = (t) => {
  const s = t.replace(/\s+/g, " ");
  if (s === " ") return '{" "}';
  if (!s) return "";
  const esc = s.replace(/[{}]/g, (c) => `{"${c}"}`);
  return esc.replace(/^ /, '{" "}').replace(/ $/, '{" "}');
};
const toJsx = (src, indent) => {
  const tag = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][\w-]*)((?:\s+[^\s=\/>]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*(\/?)>/g;
  const lines = [];
  let depth = 0, last = 0, line = "", at = 0;
  const add = (s) => { if (!line.trim()) at = depth; line += s; };
  const flush = () => { if (line.trim()) lines.push(" ".repeat(indent + at * 2) + line.trim()); line = ""; };
  for (const m of src.matchAll(tag)) {
    add(text(src.slice(last, m.index)));
    last = m.index + m[0].length;
    if (m[0].startsWith("<!--")) continue;
    const [, close, name, attrs, selfClose] = m;
    const lname = name.toLowerCase();
    if (close) { depth--; add(`</${name}>`); flush(); continue; }
    if (selfClose || VOID.has(lname)) { add(`<${name}${attrsToJsx(attrs)} />`); continue; }
    flush();
    add(`<${name}${attrsToJsx(attrs)}>`);
    depth++;
  }
  add(text(src.slice(last)));
  flush();
  if (depth !== 0) throw new Error(`unbalanced tags (depth ${depth})`);
  return lines.join("\n");
};

// The stage of one step: everything inside <div class="stage"> … </div>.
const innerOf = (src, start) => {
  const re = /<(\/?)div\b[^>]*>/g;
  re.lastIndex = start;
  let depth = 0, from = -1;
  for (let m; (m = re.exec(src));) {
    if (!m[1]) { depth++; if (from < 0) from = m.index + m[0].length; } else if (--depth === 0) return src.slice(from, m.index);
  }
  throw new Error("no end to the stage");
};

// ---------- The snippets ----------
const header = (what) =>
  `// ${what}\n// Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (${build})). Don't edit by hand.\n`;
await Deno.mkdir(`${here}snippets/video`, { recursive: true });
let total = 0;
const skipped = [];
for (const id of sections) {
  const sm = html.match(new RegExp(`<section id="${id}"[^>]*>([\\s\\S]*?)</section>`));
  if (!sm) throw new Error(`no section #${id}`);
  const out = [header(`Drawings for the guide's "${id}" section, one per step.`)];
  for (const am of sm[1].matchAll(/<article class="step[^"]*" id="([\w-]+)">/g)) {
    const stageAt = sm[1].indexOf('<div class="stage">', am.index);
    const next = sm[1].indexOf("<article", am.index + 1);
    if (stageAt < 0 || (next >= 0 && stageAt > next)) continue;
    const inner = inlineSprites(innerOf(sm[1], stageAt));
    // TestFlight's address lives only in the tester guides on rinknotes.app, so a drawing showing it stays there.
    if (/testflight\.apple\.com/i.test(inner)) { skipped.push(am[1]); continue; }
    const name = am[1].replace(/^./, (c) => c.toUpperCase()).replace(/-/g, "_");
    const title = (sm[1].slice(am.index, next < 0 ? undefined : next).match(/<h3>[\s\S]*?<\/span>([\s\S]*?)<\/h3>/) || [])[1];
    out.push(
      `\n// ${am[1]}: ${decode((title || "").replace(/<[^>]+>/g, "")).trim()}\nexport const ${name} = () => (\n  <div className="rn-shot not-prose">\n${toJsx(inner, 4)}\n  </div>\n);\n`,
    );
    total++;
  }
  await Deno.writeTextFile(`${here}snippets/video/${id}.jsx`, out.join(""));
}

// ---------- The styles ----------
const styles = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)].map((m) => m[1]);
const main = styles[0];
const at = main.indexOf("/* ---------- Drawn screens");
if (at < 0) throw new Error("the guide's drawing styles have moved");
const drawingCss = [main.slice(at), ...styles.slice(1)].join("\n");
const PAGE_ONLY = /\b(hero|herowin|herophone|stage)\b|^(html|body|:root)/;
const scope = (sel) =>
  sel.split(",").map((s) => s.trim()).filter(Boolean).map((s) => `.rn-shot ${renameSelector(s)}`).join(",");
const scopeRules = (css) => {
  let out = "", i = 0;
  css = css.replace(/\/\*[\s\S]*?\*\//g, "");
  while (i < css.length) {
    const open = css.indexOf("{", i);
    if (open < 0) break;
    const head = css.slice(i, open).trim();
    if (head.startsWith("@media") || head.startsWith("@supports")) {
      let depth = 1, j = open + 1;
      while (depth && j < css.length) { if (css[j] === "{") depth++; if (css[j] === "}") depth--; j++; }
      const inner = scopeRules(css.slice(open + 1, j - 1));
      if (inner.trim()) out += `${head}{\n${inner}}\n`;
      i = j;
      continue;
    }
    const close = css.indexOf("}", open);
    const body = css.slice(open + 1, close).trim();
    i = close + 1;
    const sels = head.split(",").map((s) => s.trim()).filter((s) => s && !PAGE_ONLY.test(s));
    if (!sels.length) continue;
    out += `${scope(sels.join(","))}{${body}}\n`;
  }
  return out;
};
const base = `/* The drawn app screens from the tester guides, scoped under .rn-shot.
   Made by docs-site/scripts/drawings.mjs from RN Video's tester guide (build 0.1 (${build})). Don't edit by hand.
   The screens are always the app's dark look; only the frame around them follows the docs' light or dark. */
@font-face{font-family:"JetBrains Mono";src:url("/fonts/JetBrainsMono-Medium.ttf") format("truetype");font-weight:500;font-display:swap}
@font-face{font-family:"JetBrains Mono";src:url("/fonts/JetBrainsMono-SemiBold.ttf") format("truetype");font-weight:600;font-display:swap}
.rn-shot{
  --bg:#f6f8fa;--panel:#ffffff;--panel2:#eef1f4;--line:#d0d7de;--line2:#afb8c1;
  --ink:#1f2328;--muted:#59636e;--faint:#6e7781;--green:#1a7f37;--bezel:#1f2328;--stage:#e4e8ec;
  --sans:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --mono:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  position:relative;display:flex;justify-content:center;align-items:center;gap:14px;flex-wrap:wrap;
  margin:14px 0 6px;padding:26px 14px 22px;min-height:150px;border-radius:16px;border:1px solid var(--line);
  background:var(--stage);color:var(--ink);font-family:var(--sans);font-size:16px;line-height:1.3;text-align:left;
}
.dark .rn-shot{
  --bg:#0d1117;--panel:#161b22;--panel2:#11161d;--line:#21262d;--line2:#30363d;
  --ink:#e6edf3;--muted:#8b949e;--faint:#6e7681;--green:#3fb950;--bezel:#2d333b;--stage:#0a0e13;
}
.rn-shot *,.rn-shot *::before,.rn-shot *::after{box-sizing:border-box}
.rn-shot p{margin:0}
.rn-shot svg{display:inline-block}
.rn-shot kbd{font-family:var(--mono);font-size:.86em;font-weight:600;padding:1px 7px;border-radius:6px;border:1px solid var(--line2);border-bottom-width:2px;background:var(--panel2);color:var(--ink);white-space:nowrap}
`;
await Deno.writeTextFile(`${here}drawings.css`, base + scopeRules(drawingCss));
console.log(`build 0.1 (${build}): ${total} drawings in ${sections.length} section(s); drawings.css written`);
if (skipped.length) console.log(`left out (they show TestFlight's address): ${skipped.join(", ")}`);
