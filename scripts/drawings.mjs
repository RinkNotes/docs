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

import { spriteInliner, toJsx, innerOf, decode, scopeRules } from "./convert.mjs";
const inlineSprites = spriteInliner(html);

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
await Deno.writeTextFile(`${here}drawings.css`, base + scopeRules(drawingCss, ".rn-shot", PAGE_ONLY));
console.log(`build 0.1 (${build}): ${total} drawings in ${sections.length} section(s); drawings.css written`);
if (skipped.length) console.log(`left out (they show TestFlight's address): ${skipped.join(", ")}`);
