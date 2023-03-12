const express = require('express');
const specialCentres = require('../controllers/specialCentres');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(specialCentres.addSpecialCentres).get(specialCentres.getAllSpecialCentres);

Router.route('/get/all').get(specialCentres.getAllSpecialCentres);

Router.route('/getcentre/:shortterm').get(specialCentres.getByDeptSpecialCentres);

Router.route('/update/:term/:shortterm').patch(specialCentres.addFaculty);


//Export----------------------------->
module.exports = Router;