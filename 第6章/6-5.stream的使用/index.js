const fs = require('fs');
const path = require('path');

//创建一个可读流
const flowa = fs.createReadStream(path.join(__dirname, '/a.txt'));

//创建一个可写流
const flowb = fs.createWriteStream(path.join(__dirname, '/b.txt'));

flowa.pipe(flowb);

flowa.on('end', () => {
  console.log('数据流向成功');
});

