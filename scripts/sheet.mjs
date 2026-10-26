import sharp from 'sharp'; import fs from 'node:fs';
const d='src/assets/photos'; const fl=fs.readdirSync(d); const W=300,H=200,cols=6;
const comps=[]; for(let i=0;i<fl.length;i++){const b=await sharp(d+'/'+fl[i]).resize(W,H,{fit:'cover'}).toBuffer();
const svg=Buffer.from(`<svg width="${W}" height="22"><rect width="100%" height="100%" fill="#000"/><text x="4" y="16" font-size="14" fill="#fff" font-family="Arial">${i}:${fl[i].replace('.jpg','')}</text></svg>`);
comps.push({input:b,left:(i%cols)*W,top:Math.floor(i/cols)*(H+0)},{input:svg,left:(i%cols)*W,top:Math.floor(i/cols)*H+H-22});}
await sharp({create:{width:W*cols,height:H*Math.ceil(fl.length/cols),channels:3,background:'#fff'}}).composite(comps).jpeg().toFile(process.argv[2]);
