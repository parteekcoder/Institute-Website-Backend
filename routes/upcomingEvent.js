const express = require('express');
const upcomingEvent = require('../controllers/upcomingEvent');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(upcomingEvent.addUpcomingEvent).get(upcomingEvent.getUpcomingEvent);

Router.route('/get/all').get(upcomingEvent.getAllUpcomingEvent);

Router.route('/:id').patch(upcomingEvent.updateUpcomingEvent).post(upcomingEvent.deleteUpcomingEvent);




//Export----------------------------->
module.exports = Router;