const express = require('express');
const latestNewsController = require('../controllers/news');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').get(latestNewsController.getNews).post(latestNewsController.addNews);

Router.route('/all').get(latestNewsController.getAllNews);

Router.route('/:id').get(latestNewsController.getNewsbyId).patch(latestNewsController.updateNews).post(latestNewsController.deleteNews);

//Export----------------------------->
module.exports = Router;