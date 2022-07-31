const express = require('express');
const campusLifeController = require('./../controllers/campusLife');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(campusLifeController.add);

//Export----------------------------->
module.exports = Router;