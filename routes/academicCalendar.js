const express = require('express');
const AcademicCalendar = require('../controllers/academicCalendar');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(AcademicCalendar.addAcademicCalendar);

Router.route('/:id').patch(AcademicCalendar.updateAcademicCalendar);

Router.route('/get/all').get(AcademicCalendar.getAllAcademicCalendar);


//Export----------------------------->
module.exports = Router;