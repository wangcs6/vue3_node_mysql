const express = require('express');
const router = express.Router();
//课程查询接口
router.get('/findCourse', (req, res) => {
  res.send('查询课程成功');
});

module.exports = router;

