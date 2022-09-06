const express = require('express');
const messageController = require('../controllers/message');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(messageController.addMessage);
Router.route('/get').get(messageController.getMessage);
Router.route('/update/:_id').post(messageController.updateMessage);


//Export----------------------------->
module.exports = Router;