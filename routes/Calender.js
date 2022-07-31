const express = require('express');
const calenderController = require('./../controllers/calender');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(calenderController.addCalender);
Router.route('/get').get(calenderController.getCalender);
Router.route('/get/:category').get(calenderController.getCalenderFromCategory);
Router.route('/update/:_id').post(calenderController.updateCalender);
Router.route('/delete/:_id').delete(calenderController.deleteCalender);



//Export----------------------------->
module.exports = Router;