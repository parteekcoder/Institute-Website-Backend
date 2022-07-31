const express = require('express');
const researchNewsController = require('./../controllers/researchNews');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(researchNewsController.addResearchNews);




//Export----------------------------->
module.exports = Router;