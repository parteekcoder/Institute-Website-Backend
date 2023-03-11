const express = require('express');
const academicnotices = require('../controllers/academicnotices');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(academicnotices.addAcademicNotices).get(academicnotices.getAllAcademicNotices);

Router.route('/get/all').get(academicnotices.getAllAcademicNotices);

Router.route('/:id').patch(academicnotices.updateAcademicNotices).post(academicnotices.deleteAcademicNotices);


//Export----------------------------->
module.exports = Router;