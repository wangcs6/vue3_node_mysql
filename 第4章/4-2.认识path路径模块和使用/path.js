const path = require('path');
const fs = require('fs');

// const newPath = path.join('c', 'b', 'a');

// console.log(newPath);

//调用读取文件内容的方法
fs.readFile(path.join(__dirname, '/text.txt'), 'utf-8', (err, data) => {
  //错误信息获取
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

