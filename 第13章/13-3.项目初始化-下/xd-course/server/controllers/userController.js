const db = require('../config/db');

/**
 * 注册接口逻辑
 */
exports.registerController = (req, res) => {
  // 注册接口逻辑
  const sql =
    'insert into user (name,pwd,head_img) value ("老六","666666","https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/default/head_img/19.jpeg")';
  db.query(sql, (err, results) => {
    if (err) {
      return res.send({ code: 1, message: err.message });
    }
    res.send({
      code: 0,
      data: '注册成功',
    });
  });
};

