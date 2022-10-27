const express = require('express');
const administrationController = require('../controllers/administration');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(administrationController.addAdministration).get(administrationController.getAdministration);

Router.route('/all').get(administrationController.getAdministrationall);

Router.route('/:id').patch(administrationController.updateAdministration).get(administrationController.getAdministration).post(administrationController.deleteAdministration);


//Export----------------------------->
module.exports = Router;