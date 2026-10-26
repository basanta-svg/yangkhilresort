import sharp from 'sharp';
import fs from 'node:fs';
const dir = 'src/assets/photos';
const backup = 'D:/Website templates/yangkhil resort/originals';
fs.mkdirSync(backup, { recursive: true });
const map = { 'trongsa dzong.jpg': 'trongsa-dzong.jpg', 'taadzong2.jpg': 'ta-dzong.jpg', 'trongsa town.jpg': 'trongsa-town.jpg' };
for (const [from, to] of Object.entries(map)) {
  const src = `${dir}/${from}`;
  if (!fs.existsSync(src)) continue;
  const info = await sharp(src).rotate().resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toFile(`${dir}/${to}`);
  console.log(to, info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB');
  fs.renameSync(src, `${backup}/${from}`); // keep the full-size original outside src
}
