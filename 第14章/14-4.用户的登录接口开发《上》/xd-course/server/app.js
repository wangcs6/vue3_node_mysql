const express = require('express');
const app = express();
/**
 * 解析post请求的body数据
 */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

/**
 * 跨域请求配置
 */
const cors = require('cors');
app.use(cors());

/**
 * 用户相关的接口
 */
const userRouter = require('./router/user');
app.use('/api/v1/user', userRouter);

/**
 * 错误中间件
 */
const joi = require('joi');
app.use((err, req, res, next) => {
  //joi表单的用户信息校验失败
  if (err instanceof joi.ValidationError) {
    return res.send({
      code: 1,
      message: err.message,
    });
  }
  //其他的错误
  res.send({
    code: 1,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log('服务启动在：http://127.0.0.1:3000');
});

