import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
const src = 'D:/Website templates/yangkhil resort/drive-download-20261023T103629Z-1-001';
const out = 'src/assets/photos';
const slug = (n) => path.parse(n).name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const seen = new Set();
for (const f of fs.readdirSync(src)) {
  let name = slug(f);
  while (seen.has(name)) name += '-b';
  seen.add(name);
  const info = await sharp(path.join(src, f)).rotate().resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(out, name + '.jpg'));
  console.log(name, info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB');
}
