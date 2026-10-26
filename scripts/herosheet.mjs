import sharp from 'sharp';
const comps=[];for(let i=1;i<=6;i++){comps.push({input:await sharp(`src/assets/photos/hero-${i}.jpg`).resize(500,330,{fit:'cover'}).toBuffer(),left:((i-1)%3)*500,top:Math.floor((i-1)/3)*330});}
await sharp({create:{width:1500,height:660,channels:3,background:'#fff'}}).composite(comps).jpeg().toFile(process.argv[2]);
