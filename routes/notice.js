const express = require('express');
const noticeController = require('../controllers/notice');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(noticeController.addNotice).get(noticeController.getNotice);

Router.route('/get/all').get(noticeController.showallNotice);

Router.route('/:id').get(noticeController.getNoticeById).put(noticeController.updateNotice).post(noticeController.deleteNotice);



//Export----------------------------->
module.exports = Router;
