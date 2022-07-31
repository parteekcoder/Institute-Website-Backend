const express = require('express');
const noticeController = require('./../controllers/notice');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(noticeController.addNotice);
Router.route('/get').get(noticeController.getNotice);
Router.route('/get/:category').get(noticeController.getNoticeFromCategory);
Router.route('/update/:_id').post(noticeController.updateNotice);
Router.route('/delete/:_id').delete(noticeController.deleteNotice);



//Export----------------------------->
module.exports = Router;