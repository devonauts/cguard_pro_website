import fs from 'node:fs';
const SP = '/private/tmp/claude-501/-Users-mike-cguard-pro/3d8d0928-eb40-4c15-a30d-809fbcb9cadf/scratchpad';
const KEY = '9f923e3bf5f140d8beb51ae84b74be31';
const base = 'https://cguardpro.com';
const slugs = JSON.parse(fs.readFileSync(SP + '/manifest-500.json', 'utf8')).posts.map((p) => p.slug);
const urlList = [base + '/blog/', ...slugs.map((s) => `${base}/blog/${s}`)];
// IndexNow accepts up to 10000 per request
const body = { host: 'cguardpro.com', key: KEY, keyLocation: `${base}/${KEY}.txt`, urlList };
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(body),
});
console.log('URLs enviadas:', urlList.length, '| status:', res.status, res.statusText);
const txt = await res.text(); if (txt) console.log('body:', txt.slice(0, 200));
