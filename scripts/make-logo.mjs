import sharp from 'sharp';
const a = await sharp('src/assets/brand/logo.png').ensureAlpha().extractChannel(3).toBuffer();
const { width, height } = await sharp(a).metadata();
await sharp({ create: { width, height, channels: 3, background: '#ffffff' } }).joinChannel(a).png().toFile('src/assets/brand/logo-white.png');
await sharp('src/assets/brand/logo.png').resize(256, 256, { fit: 'contain', background: '#ffffff' }).png().toFile('public/favicon.png');
