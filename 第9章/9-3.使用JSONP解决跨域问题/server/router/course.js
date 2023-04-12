const express = require('express');
const router = express.Router();

//课程查询
router.get('/find', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  query = req.query.callback;

  const data = {
    name: '小滴课堂',
  };
  res.send(`${query}(${JSON.stringify(data)})`);

  // getData({"name":"小滴课堂"})
});

module.exports = router;

