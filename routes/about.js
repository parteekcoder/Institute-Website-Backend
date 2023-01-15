const express = require('express');
const about = require('../controllers/about');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(about.addAbout).get(about.getAbout);

Router.route('/:id').patch(about.updateAbout).post(about.deleteAbout);

Router.route('/get/all').get(about.getAllAbout);


//Export----------------------------->
module.exports = Router;