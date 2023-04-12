const express = require('express');
const app = express();
// const cors = require('cors');
const userRouter = require('./router/user');
const courseRouter = require('./router/course');

//解决接口跨域的问题
// app.use(cors());

//解析json格式的数据
app.use(express.json());
//解析urlencoded格式的数据
app.use(express.urlencoded({ extend: false }));

//用户相关的接口
app.use('/api/v1/user', userRouter);
//课程相关的接口
app.use('/api/v1/course', courseRouter);

app.listen(3000, () => {
  console.log('server run in http://127.0.0.1:3000');
});

