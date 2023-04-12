const express = require('express');
const app = express();

//定义中间件函数
const middleware = (req, res, next) => {
  console.log('a中间件执行了');
  // req.query = { id: '1' };
  next();
};
const middlewares = (req, res, next) => {
  console.log('b中间件执行了');
  // req.query = { id: '1' };
  next();
};

// app.use(middleware);
// app.use(middlewares);

app.post('/login', [middleware, middlewares], (req, res) => {
  // console.log(req.query, 'login');
  res.send('登录成功');
});

app.post('/register', (req, res) => {
  // console.log(req.query, 'register');
  res.send('注册成功');
});

app.listen(3000, () => {
  console.log('server run in http://127.0.0.1:3000');
});

