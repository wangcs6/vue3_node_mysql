const path = require('path');
//获取路径的最后一部分
console.log(path.basename('/test/something'));
console.log(path.basename('/test/something.txt'));
console.log(path.basename('/test/something.txt', '.txt'));
//获取路径的目录
console.log(path.dirname('/test/something'));
console.log(path.dirname('/test/something/file.txt'));
//获取路径中的后缀名
console.log(path.extname('/test/something'));
console.log(path.extname('/test/something.html'));

