// Netlify serves a clean URL like /o-nama by 301-redirecting to /o-nama/
// whenever the only matching asset is a directory (o-nama/index.html).
// That redirect fights our canonical URLs (which have no trailing slash),
// splitting ranking signals across two URL variants on every prerendered route.
//
// Netlify serves foo.html at /foo with no redirect, so after prerendering we
// mirror every nested route/index.html into a sibling route.html. The clean
// URL then resolves directly with a 200 and matches the canonical exactly.

const fs = require('fs');
const path = require('path');

const browserDir = path.join(__dirname, '..', 'dist', 'angular_project', 'browser');

if (!fs.existsSync(browserDir)) {
  console.error(`[flatten-prerender] Build output not found at ${browserDir}`);
  process.exit(1);
}

let count = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (entry.name !== 'index.html') continue;
    if (dir === browserDir) continue; // root index.html has no clean-URL sibling to create

    const flatPath = `${dir}.html`;
    fs.copyFileSync(fullPath, flatPath);
    count++;
  }
}

walk(browserDir);

console.log(`[flatten-prerender] Created ${count} flat .html file(s) alongside prerendered routes.`);
