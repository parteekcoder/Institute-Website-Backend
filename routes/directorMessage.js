const express = require('express');
const directorMessageController = require('./../controllers/directorMessage');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(directorMessageController.addMessage);
Router.route('/get').get(directorMessageController.getMessage);
Router.route('/update/:_id').post(directorMessageController.updateMessage);


//Export----------------------------->
module.exports = Router;