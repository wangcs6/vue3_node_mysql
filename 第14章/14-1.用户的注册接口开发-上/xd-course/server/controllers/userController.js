const db = require('../config/db');

/**
 * 注册接口逻辑
 */
exports.registerController = (req, res) => {
  // 用户名或者密码判空的校验
  let { userName, password } = req.body;
  if (!userName || !password) {
    return res.send({ code: 1, message: '用户名或者密码不能为空！' });
  }
  // 用户名查重的逻辑
  const userSelectSql = 'select * from user where name=?';
  db.query(userSelectSql, userName, (err, results) => {
    if (err) {
      return res.send({ code: 1, message: err.message });
    }
    //判断用户是否在数据库中存在
    if (results.length > 0) {
      return res.send({ code: 1, message: '该用户名已经存在' });
    }

    //用户密码加密
  });
};

