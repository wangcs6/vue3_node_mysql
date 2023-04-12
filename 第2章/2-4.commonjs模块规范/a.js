const xd = '小滴课堂';
function fun() {
  console.log('hello commonjs');
}
let count = 1;
function countFun() {
  count++;
}

module.exports = {
  xd,
  fun,
  count,
  countFun,
};

