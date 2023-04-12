const express = require('express');
const router = express.Router();

//课程查询
router.get('/find', (req, res) => {
  query = req.query;
  res.send({
    code: 0, //判断接口请求成功与否 1：失败，0：成功
    data: query,
  });
});

module.exports = router;

