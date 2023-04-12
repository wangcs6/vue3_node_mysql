const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  let mess = '<h1>404 页面数据请求失败</h1>';
  if (req.url === '/' || req.url === '/home') {
    mess = '<h1>首页</h1>';
  } else if (req.url === '/about') {
    mess = '<h1>关于</h1>';
  }
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end(mess);
});

server.listen(3000, () => {
  console.log('server run in http://127.0.0.1:3000');
});

