const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { nextTick } = require('process');
// //解析json格式的数据
// app.use(express.json());
// //解析url-encoded格式的数据
// app.use(express.urlencoded({extend:false}));
//第三方插件解析post请求数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

app.post('/register', (req, res) => {
  console.log(req.body);
  // throw new Error('出现错误了');
  res.send('注册成功');
});

// //错误级别中间件
// app.use((err, req, res, next) => {
//   res.send(err.message);
// });

app.listen(3000, () => {
  console.log('server run in http://127.0.0.1:3000');
});

