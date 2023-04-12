//引入http模块
const http = require('http');

//创建服务器
const server = http.createServer();

//监听客户端的请求
server.on('request', (req, res) => {
  const mess = `请求地址：${req.url},请求方法:${req.method}`;
  //解决中文乱码的问题
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  //响应的内容和结束本次请求
  res.end(mess);
});

//启动服务器
server.listen(3000, () => {
  console.log('服务运行在：http://127.0.0.1:3000');
});
