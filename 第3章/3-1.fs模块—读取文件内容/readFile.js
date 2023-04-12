// 引入fs模块
const fs = require('fs');

//调用读取文件内容的方法
fs.readFile('./text.txt', 'utf-8', (err, data) => {
  //错误信息获取
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

