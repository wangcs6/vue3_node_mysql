const express = require('express');
const router = express.Router();
const expressJoi = require('@escook/express-joi');
const { findCourseCheck } = require('../utils/check');
const courseController = require('../controllers/courseController');

//课程查询接口
router.get('/find', expressJoi(findCourseCheck), courseController.listVideo);

module.exports = router;

