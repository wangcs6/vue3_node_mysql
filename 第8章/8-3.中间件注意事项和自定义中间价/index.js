const express = require('express');
const app = express();
const bodyParser = require('./bodyParser');
app.use(bodyParser);

app.post('/register', (req, res) => {
  console.log(req.body);
  res.send('注册成功');
});

app.listen(3000, () => {
  console.log('server run in http://127.0.0.1:3000');
});

