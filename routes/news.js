const express = require('express');
const latestNewsController = require('../controllers/news');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').get(latestNewsController.getNews).post(latestNewsController.addNews)
Router.route('/:id').get(latestNewsController.showNewsbyId).patch(latestNewsController.updateNews).delete(latestNewsController.deleteNews);

//Export----------------------------->
module.exports = Router;