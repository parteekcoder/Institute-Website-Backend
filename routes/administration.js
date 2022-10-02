const express = require('express');
const administrationController = require('../controllers/administration');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(administrationController.addAdministration);
Router.route('/get').get(administrationController.getAdministration);
Router.route('/update/:_id').post(administrationController.updateAdministration);


//Export----------------------------->
module.exports = Router;