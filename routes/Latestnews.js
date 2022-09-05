const express = require('express');
const latestNewsController = require('./../controllers/latestNews');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(latestNewsController.addNews);
Router.route('/get').get(latestNewsController.getLatestnews);
Router.route('/get/:category').get(latestNewsController.getLatestnewsFromCategory);
Router.route('/update/:_id').post(latestNewsController.updateLatestnews);
Router.route('/delete/:_id').delete(latestNewsController.deleteLatestnews);



//Export----------------------------->
module.exports = Router;