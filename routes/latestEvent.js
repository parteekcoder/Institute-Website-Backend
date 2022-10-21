const express = require('express');
const latestEventController = require('./../controllers/latestEvent');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(latestEventController.addLatestEvent).get(latestEventController.getLatestEvent);

Router.route('/get/:category').get(latestEventController.getLatestEventFromCategory);
Router.route('/update/:_id').post(latestEventController.updateLatestEvent);
Router.route('/delete/:_id').delete(latestEventController.deleteLatestEvent);



//Export----------------------------->
module.exports = Router;