const express = require('express');
const latestNewsController = require('./../controllers/latestNews');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(latestNewsController.addNews);



//Export----------------------------->
module.exports = Router;