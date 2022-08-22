const express = require('express');
const quickLinksController = require('./../controllers/quickLinks');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(quickLinksController.addQuicklinks);
Router.route('/add').post(quickLinksController.addQuicklinks);
Router.route('/get').get(quickLinksController.getQuicklinks);
Router.route('/get/:caqtegory').get(quickLinksController.getQuicklinksFromCategory);
Router.route('/update/:_id').post(quickLinksController.updateQuicklinks);
Router.route('/delete/:_id').delete(quickLinksController.deleteQuicklinks);



//Export----------------------------->
module.exports = Router;