const fs = require('fs');

//写入文件内容的方法
const content = '小滴课堂';
fs.writeFile('./text.txt', content, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('写入内容成功');
});

//追加文件内容的方法
const contents = '追加的内容';
fs.appendFile('./text.txt', contents, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('追加文件内容成功');
});

