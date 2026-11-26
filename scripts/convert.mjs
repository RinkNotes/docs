// convert.mjs: the parts drawings.mjs and lineups-drawings.mjs share. Copies a tester guide's drawn screens
// as JSX for Mintlify, and scopes the guide's styles under one wrapper class.

// ---------- The icon sprites ----------
// spriteInliner(html) gives a function that replaces <svg><use href="#id"/></svg> with the symbol itself,
// since a snippet can't see the guide's sprite sheet.
export const spriteInliner = (html) => {
  const symbols = {};
  for (const m of html.matchAll(/<symbol id="([\w-]+)"([^>]*)>([\s\S]*?)<\/symbol>/g)) symbols[m[1]] = { attrs: m[2], body: m[3] };
  return (s) => s.replace(/<svg([^>]*)>\s*<use href="#([\w-]+)"\s*\/>\s*<\/svg>/g, (all, attrs, id) => {
    const sym = symbols[id];
    if (!sym) throw new Error(`no symbol #${id}`);
    return `<svg${attrs}${sym.attrs} aria-hidden="true">${sym.body}</svg>`;
  });
};

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
export const decode = (s) => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
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
export const RENAME = { s: "rn-s" };
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
export const toJsx = (src, indent) => {
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
export const innerOf = (src, start) => {
  const re = /<(\/?)div\b[^>]*>/g;
  re.lastIndex = start;
  let depth = 0, from = -1;
  for (let m; (m = re.exec(src));) {
    if (!m[1]) { depth++; if (from < 0) from = m.index + m[0].length; } else if (--depth === 0) return src.slice(from, m.index);
  }
  throw new Error("no end to the stage");
};

// scopeRules(css, wrapper, pageOnly): each rule's selectors put under wrapper, leaving out those pageOnly matches.
export const scopeRules = (css, wrapper, pageOnly) => {
  const scope = (sel) =>
  sel.split(",").map((s) => s.trim()).filter(Boolean).map((s) => `${wrapper} ${renameSelector(s)}`).join(",");
  const inner = (css) => {
  let out = "", i = 0;
  css = css.replace(/\/\*[\s\S]*?\*\//g, "");
  while (i < css.length) {
    const open = css.indexOf("{", i);
    if (open < 0) break;
    const head = css.slice(i, open).trim();
    if (head.startsWith("@keyframes")) { // copied as it is: its steps aren't selectors
      let depth = 1, j = open + 1;
      while (depth && j < css.length) { if (css[j] === "{") depth++; if (css[j] === "}") depth--; j++; }
      out += css.slice(i, j).trim() + "\n";
      i = j;
      continue;
    }
    if (head.startsWith("@media") || head.startsWith("@supports")) {
      let depth = 1, j = open + 1;
      while (depth && j < css.length) { if (css[j] === "{") depth++; if (css[j] === "}") depth--; j++; }
      const inn = inner(css.slice(open + 1, j - 1));
      if (inn.trim()) out += `${head}{\n${inn}}\n`;
      i = j;
      continue;
    }
    const close = css.indexOf("}", open);
    const body = css.slice(open + 1, close).trim();
    i = close + 1;
    const sels = head.split(",").map((s) => s.trim()).filter((s) => s && !pageOnly.test(s));
    if (!sels.length) continue;
    out += `${scope(sels.join(","))}{${body}}\n`;
  }
  return out;
};
  return inner(css);
};
