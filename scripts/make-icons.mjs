import sharp from 'sharp';
const src = 'src/assets/brand/site icon.png';
// Crop the whitespace, then centre the lotus on a square white canvas with a little padding.
const trimmed = await sharp(src).trim({ background: '#ffffff', threshold: 12 }).toBuffer();
const make = async (size, out, pad = 0.14) => {
  const inner = Math.round(size * (1 - pad * 2));
  const logo = await sharp(trimmed).resize(inner, inner, { fit: 'contain', background: '#ffffff' }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 3, background: '#ffffff' } })
    .composite([{ input: logo, gravity: 'center' }]).png().toFile(out);
};
await make(32, 'public/favicon-32.png', 0.06);
await make(192, 'public/icon-192.png');
await make(512, 'public/icon-512.png');
await make(180, 'public/apple-touch-icon.png', 0.16);
