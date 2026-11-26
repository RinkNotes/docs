// lineups-drawings.mjs: turns the drawn screens in the Lineups tester guide into Mintlify snippets.
//
//   deno run --allow-read --allow-write docs-site/scripts/lineups-drawings.mjs <guide.html> <section>...
//
// <guide.html> is site/lineups/testers/index.html. Each <section> is a guide section id (setup, turn,
// lines …). In that section every drawn phone (<div class="phone …">) and every card fragment
// (<div class="appfrag">) is one drawing, numbered in order: the third in "setup" becomes <Setup_3 />,
// in snippets/lineups/<section>.jsx. It also writes lineups-drawings.css, the guide's drawing styles,
// each rule scoped under .rn-lshot so nothing else in the docs changes (RN Video's live under .rn-shot).
//
// The drawings are copied, not redrawn: the same markup, classes, words, numbered pins and screen-reader
// labels. Files it writes say so at the top; don't edit them by hand.

import { spriteInliner, toJsx, decode, scopeRules } from "./convert.mjs";

const [guidePath, ...sections] = Deno.args;
if (!guidePath || !sections.length) {
  console.error("usage: lineups-drawings.mjs <guide.html> <section>...");
  Deno.exit(2);
}
const here = new URL("..", import.meta.url).pathname; // docs-site/
const html = await Deno.readTextFile(guidePath);
const inlineSprites = spriteInliner(html);

// The whole element that starts at `start`: its open tag to its matching close tag.
const outerOf = (src, start) => {
  const re = /<(\/?)div\b[^>]*>/g;
  re.lastIndex = start;
  let depth = 0;
  for (let m; (m = re.exec(src));) {
    if (!m[1]) depth++;
    else if (--depth === 0) return src.slice(start, m.index + m[0].length);
  }
  throw new Error("no end to the drawing");
};

// ---------- The snippets ----------
const header = (what) =>
  `// ${what}\n// Made by docs-site/scripts/lineups-drawings.mjs from the Lineups tester guide. Don't edit by hand.\n`;
await Deno.mkdir(`${here}snippets/lineups`, { recursive: true });
let total = 0;
const skipped = [];
for (const id of sections) {
  const sm = html.match(new RegExp(`<section id="${id}">([\\s\\S]*?)</section>`));
  if (!sm) throw new Error(`no section #${id}`);
  const out = [header(`Drawings for the guide's "${id}" section, in order.`)];
  const base = id.replace(/^./, (c) => c.toUpperCase());
  let n = 0;
  for (const dm of sm[1].matchAll(/<div class="(phone|appfrag)\b[^"]*"[^>]*>/g)) {
    n++;
    const name = `${base}_${n}`;
    const el = inlineSprites(outerOf(sm[1], dm.index));
    // TestFlight's address lives only in the tester guides on rinknotes.app, so a drawing showing it stays there.
    if (/testflight\.apple\.com/i.test(el)) { skipped.push(name); continue; }
    const label = decode((dm[0].match(/aria-label="([^"]*)"/) || [])[1] || dm[1]);
    out.push(
      `\n// ${name}: ${label}\nexport const ${name} = () => (\n  <div className="rn-lshot not-prose">\n${toJsx(el, 4)}\n  </div>\n);\n`,
    );
    total++;
  }
  await Deno.writeTextFile(`${here}snippets/lineups/${id}.jsx`, out.join(""));
}

// ---------- The styles ----------
const styles = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)].map((m) => m[1]);
const main = styles[0];
const at = main.indexOf("/* ---------- Phone mock-ups");
if (at < 0) throw new Error("the guide's drawing styles have moved");
// The page's own pieces (the TestFlight cards and the Safari drawing) are left out.
const drawingCss = [main.slice(at), ...styles.slice(1).filter((s) => !/\.(access|tflink)\{/.test(s))].join("\n");
const PAGE_ONLY = /\b(hero|herophone|stage|stagecap|steps|sechead|access|acard)\b|^(html|body|:root|@font-face)/;
const base = `/* The drawn Lineups screens from its tester guide, scoped under .rn-lshot.
   Made by docs-site/scripts/lineups-drawings.mjs from site/lineups/testers/index.html. Don't edit by hand.
   The screens are always the app's dark look; only the frame around them follows the docs' light or dark. */
.rn-lshot{
  --bg:#f6f8fa;--panel:#ffffff;--panel2:#eef1f4;--line:#d0d7de;--line2:#afb8c1;
  --ink:#1f2328;--muted:#656d76;--faint:#8c959f;
  --green:#1a7f37;--greenfill:#1a7f37;--on-green:#ffffff;
  --greensoft:rgba(45,164,78,.12);--greenline:rgba(45,164,78,.35);
  --amber:#9a6700;--ambersoft:rgba(154,103,0,.10);--amberline:rgba(154,103,0,.32);
  --blue:#0969da;--red:#cf222e;--bezel:#1f2328;--stage:#e4e8ec;
  --sans:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --mono:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  position:relative;display:flex;justify-content:center;align-items:center;gap:14px;flex-wrap:wrap;
  margin:14px 0 6px;padding:26px 14px 22px;border-radius:16px;border:1px solid var(--line);
  background:var(--stage);color:var(--ink);font-family:var(--sans);font-size:16px;line-height:1.3;text-align:left;
}
.dark .rn-lshot{
  --bg:#0d1117;--panel:#161b22;--panel2:#11161d;--line:#21262d;--line2:#30363d;
  --ink:#e6edf3;--muted:#8b949e;--faint:#6e7681;
  --green:#3fb950;--greenfill:#2ea043;--on-green:#0d1117;
  --greensoft:rgba(46,160,67,.12);--greenline:rgba(46,160,67,.32);
  --amber:#d29922;--ambersoft:rgba(210,153,34,.12);--amberline:rgba(210,153,34,.32);
  --blue:#388bfd;--red:#f85149;--bezel:#2d333b;--stage:#0a0e13;
}
.rn-lshot *,.rn-lshot *::before,.rn-lshot *::after{box-sizing:border-box}
.rn-lshot p{margin:0}
.rn-lshot svg{display:inline-block}
.rn-lshot > .appfrag{width:100%;max-width:320px}
`;
await Deno.writeTextFile(`${here}lineups-drawings.css`, base + scopeRules(drawingCss, ".rn-lshot", PAGE_ONLY));
console.log(`Lineups guide: ${total} drawings in ${sections.length} section(s); lineups-drawings.css written`);
if (skipped.length) console.log(`left out (they show TestFlight's address): ${skipped.join(", ")}`);
