// Generates 1200x630 branded blog covers (dark + gold), matching the existing
// 119 covers in public/blog/. Renders each at 2x (2400x1260) via headless Chrome
// then lets the export downscale to a crisp 1200x630 JPG (retina-quality edges).
//
// Usage: node gen-covers.mjs <manifest.json> [--only slug1,slug2]
// Reads posts[].{slug,chip,title}. Writes website/public/blog/<slug>.jpg
import puppeteer from '/Users/mike/cguard-pro/backend/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js';
import fs from 'node:fs';
import path from 'node:path';

const OUT = '/Users/mike/cguard-pro/website/public/blog';
const manifestPath = process.argv[2];
const onlyArg = process.argv.includes('--only')
  ? process.argv[process.argv.indexOf('--only') + 1].split(',')
  : null;

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
let posts = manifest.posts;
if (onlyArg) posts = posts.filter((p) => onlyArg.includes(p.slug));

// Split a title into a white "lead" line group and a gold "emphasis" group.
// Heuristic: colon splits lead:emphasis; otherwise ~55% white / 45% gold by words.
function splitTitle(title) {
  if (title.includes(':')) {
    const [a, b] = title.split(/:(.+)/);
    return { white: a.trim() + ':', gold: b.trim() };
  }
  const words = title.split(' ');
  const cut = Math.max(1, Math.round(words.length * 0.5));
  return { white: words.slice(0, cut).join(' '), gold: words.slice(cut).join(' ') };
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function html({ chip, title }) {
  const { white, gold } = splitTitle(title);
  // Font-size ramp so long titles still fit the 4-line box comfortably.
  const len = title.length;
  const fs2 = len > 68 ? 60 : len > 52 ? 68 : len > 38 ? 76 : 84;
  return `<!doctype html><html><head><meta charset="utf8">
<style>
  @font-face { font-family:'Poppins'; src: local('Poppins'); }
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:1200px; height:630px; }
  body {
    font-family:'Poppins','Helvetica Neue',Arial,sans-serif;
    background:#0a0a0a; position:relative; overflow:hidden;
    -webkit-font-smoothing:antialiased;
  }
  /* gold top hairline */
  .top { position:absolute; top:0; left:0; right:0; height:6px;
    background:linear-gradient(90deg,#8a6d1f 0%,#D4AF37 40%,#F5D678 55%,#D4AF37 70%,#8a6d1f 100%); }
  /* warm glow top-left */
  .glow { position:absolute; top:-180px; left:-160px; width:640px; height:640px;
    background:radial-gradient(circle, rgba(212,175,55,0.16) 0%, rgba(212,175,55,0.04) 42%, transparent 68%); }
  /* dotted motif right side */
  .dots { position:absolute; top:0; right:0; width:520px; height:630px; opacity:0.5;
    background-image:radial-gradient(rgba(212,175,55,0.28) 1.4px, transparent 1.6px);
    background-size:34px 34px;
    -webkit-mask-image:linear-gradient(90deg, transparent 0%, #000 60%);
            mask-image:linear-gradient(90deg, transparent 0%, #000 60%); }
  .pad { position:absolute; inset:0; padding:64px 72px; display:flex; flex-direction:column; }
  .chip { align-self:flex-start; border:1.5px solid rgba(212,175,55,0.55); color:#E9C349;
    font-size:17px; font-weight:600; letter-spacing:3px; text-transform:uppercase;
    padding:9px 20px; border-radius:999px; }
  .title { margin-top:auto; margin-bottom:auto; font-weight:700; line-height:1.12;
    font-size:${fs2}px; letter-spacing:-0.5px; }
  .title .w { color:#ffffff; }
  .title .g { color:#D4AF37; }
  .foot { display:flex; align-items:center; gap:14px; font-size:22px; }
  .foot .brand { font-weight:700; letter-spacing:1px; }
  .foot .brand .c { color:#ffffff; } .foot .brand .p { color:#D4AF37; }
  .foot .dot { color:#D4AF37; }
  .foot .url { color:rgba(255,255,255,0.42); font-weight:500; }
</style></head>
<body>
  <div class="top"></div><div class="glow"></div><div class="dots"></div>
  <div class="pad">
    <div class="chip">${esc(chip)}</div>
    <div class="title"><span class="w">${esc(white)}</span><br><span class="g">${esc(gold)}</span></div>
    <div class="foot"><span class="brand"><span class="c">C-GUARD </span><span class="p">PRO</span></span><span class="dot">•</span><span class="url">cguardpro.com/blog</span></div>
  </div>
</body></html>`;
}

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--force-device-scale-factor=2'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

let done = 0;
for (const p of posts) {
  await page.setContent(html(p), { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => document.fonts.ready);
  const buf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
  fs.writeFileSync(path.join(OUT, `${p.slug}.png`), buf);
  done++;
  if (done % 10 === 0) console.log(`  ${done}/${posts.length}`);
}
await browser.close();
console.log(`Rendered ${done} PNG covers to ${OUT}`);
