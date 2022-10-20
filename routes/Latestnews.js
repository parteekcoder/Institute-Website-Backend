const express = require('express');
const latestNewsController = require('./../controllers/LatestNews');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(latestNewsController.addNews);

Router.route('/show').get(latestNewsController.showNews);

Router.route('/showbyId').post(latestNewsController.showNewsbyId);

Router.route('/update').post(latestNewsController.updateNews);

Router.route('/delete').post(latestNewsController.deleteNews);

Router.route('/showAll').get(latestNewsController.showAllNews);

//Export----------------------------->
module.exports = Router;