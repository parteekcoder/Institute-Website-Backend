const express = require('express');
const latestNewsController = require('./../controllers/latestNews');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(latestNewsController.addNews);
Router.route('/add').post(latestnewsController.addLatestnews);
Router.route('/get').get(latestnewsController.getLatestnews);
Router.route('/get/:category').get(latestnewsController.getLatestnewsFromCategory);
Router.route('/update/:_id').post(latestnewsController.updateLatestnews);
Router.route('/delete/:_id').delete(latestnewsController.deleteLatestnews);



//Export----------------------------->
module.exports = Router;