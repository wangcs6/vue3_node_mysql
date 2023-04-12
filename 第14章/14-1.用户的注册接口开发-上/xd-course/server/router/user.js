const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * 用户注册接口
 */
router.post('/register', userController.registerController);

module.exports = router;

