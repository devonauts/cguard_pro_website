import fs from 'node:fs';
const SP = '/private/tmp/claude-501/-Users-mike-cguard-pro/3d8d0928-eb40-4c15-a30d-809fbcb9cadf/scratchpad';
process.chdir('/Users/mike/cguard-pro/website');

const routes = new Set();
(function walk(d, base) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = d + '/' + e.name;
    if (e.isDirectory()) { if (e.name === 'en') continue; walk(p, base + '/' + e.name); }
    else if (e.name.endsWith('.astro') && !e.name.startsWith('[')) {
      let r = (base + '/' + e.name.replace(/\.astro$/, '')).replace(/\/index$/, '') || '/';
      routes.add(r);
    }
  }
})('src/pages', '');
routes.add('/');
fs.readdirSync('src/content/blog').filter((f) => f.endsWith('.md')).forEach((f) => routes.add('/blog/' + f.replace(/\.md$/, '')));

const pub = new Set();
(function wp(d, base) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = d + '/' + e.name;
    if (e.isDirectory()) wp(p, base + '/' + e.name); else pub.add(base + '/' + e.name);
  }
})('public', '');

const newSlugs = JSON.parse(fs.readFileSync(SP + '/manifest-500.json', 'utf8')).posts.map((p) => p.slug);
let brokenLinks = 0, brokenImgs = 0, badFm = 0, shotIssues = 0;
const problems = [];
for (const slug of newSlugs) {
  const md = fs.readFileSync('src/content/blog/' + slug + '.md', 'utf8');
  const fm = md.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) { badFm++; problems.push(slug + ': SIN frontmatter'); continue; }
  const f = fm[1];
  if (!/^title:/m.test(f) || !/^description:/m.test(f) || !/^image:/m.test(f) || !/^tags:/m.test(f) || !/^lang:/m.test(f)) { badFm++; problems.push(slug + ': frontmatter incompleto'); }
  const im = f.match(/^image:\s*"?([^"\n]+)"?/m);
  if (im && !pub.has(im[1].trim())) { brokenImgs++; problems.push(slug + ': cover roto ' + im[1]); }
  const body = md.slice(fm[0].length);
  let m; const linkRe = /\]\((\/[^)\s]*)\)/g;
  while ((m = linkRe.exec(body))) {
    let url = m[1].split('#')[0].replace(/\/$/, '') || '/';
    if (/\.(png|jpg|jpeg|webp|svg|pdf|xlsx|txt)$/i.test(url)) { if (!pub.has(url)) { brokenImgs++; problems.push(slug + ': asset roto ' + url); } }
    else { if (!routes.has(url)) { brokenLinks++; problems.push(slug + ': LINK roto ' + url); } }
  }
  const shots = (body.match(/\]\((\/screenshots\/[^)\s]*)\)/g) || []);
  if (shots.length !== 2) { shotIssues++; problems.push(slug + ': ' + shots.length + ' screenshots (esperados 2)'); }
}
console.log('Problemas:', problems.length);
problems.slice(0, 60).forEach((p) => console.log('  - ' + p));
if (problems.length > 60) console.log('  ...(' + (problems.length - 60) + ' más)');
console.log('\nResumen: links_rotos=' + brokenLinks + ' imgs_rotas=' + brokenImgs + ' frontmatter_malo=' + badFm + ' shot_issues=' + shotIssues);
