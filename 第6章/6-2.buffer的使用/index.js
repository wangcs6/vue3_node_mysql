//字符串转buffer数据
// const buf = Buffer.from('xdclass');
// console.log(buf);
// const buf1 = Buffer.from('小滴课堂');
// console.log(buf1);

//创建空的buffer内存
// const bufa = Buffer.alloc(10);
// console.log(bufa);

// const bufs = Buffer.allocUnsafe(11);
// console.log(bufs);

//buffer数据转成字符串
const buf1 = Buffer.from('小滴课堂');
const str = buf1.toString();
console.log(str);

