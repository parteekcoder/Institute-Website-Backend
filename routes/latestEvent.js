const express = require('express');
const latestEventController = require('./../controllers/latestEvent');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(latestEventController.addLatestEvent).get(latestEventController.getLatestEvent);

Router.route('/get/all').get(latestEventController.getAllLatestEvent);

Router.route('/:id').patch(latestEventController.updateLatestEvent).post(latestEventController.deleteLatestEvent);




//Export----------------------------->
module.exports = Router;