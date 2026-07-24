import fs from 'node:fs';
const SP = '/private/tmp/claude-501/-Users-mike-cguard-pro/3d8d0928-eb40-4c15-a30d-809fbcb9cadf/scratchpad';
const dir = '/Users/mike/cguard-pro/website/src/content/blog';
const rows = [];
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
  const md = fs.readFileSync(dir + '/' + f, 'utf8');
  const fm = md.match(/^---\n([\s\S]*?)\n---/); if (!fm) continue;
  const g = (re) => { const m = fm[1].match(re); return m ? m[1].trim().replace(/^"|"$/g, '') : ''; };
  const title = g(/^title:\s*(.+)$/m);
  const lang = g(/^lang:\s*(.+)$/m) || 'es';
  const tagsRaw = g(/^tags:\s*(\[.*\])$/m);
  let tags = [];
  try { tags = JSON.parse(tagsRaw.replace(/(\w+):/g, '')); } catch { tags = (tagsRaw.match(/"[^"]+"/g) || []).map((s) => s.replace(/"/g, '')); }
  rows.push({ slug: f.replace(/\.md$/, ''), lang, title, tags });
}
fs.writeFileSync(SP + '/existing-inventory.json', JSON.stringify(rows, null, 1));
console.log('total:', rows.length, '| ES:', rows.filter((r) => r.lang === 'es').length, '| EN:', rows.filter((r) => r.lang === 'en').length);
const tf = {}; rows.forEach((r) => r.tags.forEach((t) => (tf[t] = (tf[t] || 0) + 1)));
console.log('\n=== TAGS ===');
console.log(Object.entries(tf).sort((a, b) => b[1] - a[1]).map(([t, n]) => `${t}:${n}`).join(', '));
