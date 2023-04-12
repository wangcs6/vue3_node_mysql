const express = require('express');
const router = express.Router();
//登录接口
router.post('/login', (req, res) => {
  res.send('登录成功');
});

//注册接口
router.post('/register', (req, res) => {
  res.send('注册成功');
});

module.exports = router;

