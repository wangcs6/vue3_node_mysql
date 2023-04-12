//引入http模块
const http = require('http');

//创建服务器
const server = http.createServer();

//监听客户端的请求
server.on('request', (req, res) => {
  const mess = `当前请求的地址${req.url},请求的方法${req.method}`;
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end(mess);
});

//启动服务器
server.listen(3000, () => {
  console.log('server run in http://127.0.0.1:3000');
});

