const fs = require('fs');
//读取文件内容
fs.readFile('./text.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const newList = [];
  //处理文件内容
  data.split('\n').map((i) => {
    newList.push(i.replace('-', ':'));
  });
  const content = newList.join('\n');
  //更改文件内容
  fs.writeFile('./text.txt', content, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('文件更改成功');
  });
});

