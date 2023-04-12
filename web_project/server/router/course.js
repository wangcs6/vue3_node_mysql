const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const expressJoi = require('@escook/express-joi');
const { findCourseCheck,updateCourseCheck } = require('../utils/check');

//课程查询接口
router.get('/find',expressJoi(findCourseCheck),courseController.listVideo)

// //课程修改接口
// router.get('/update',expressJoi(updateCourseCheck),courseController.updateVideoById)

// 修改课程
router.get('/update',expressJoi(updateCourseCheck), courseController.updateVideoById);



module.exports = router