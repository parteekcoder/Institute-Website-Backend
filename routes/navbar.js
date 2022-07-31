const express = require('express');
const navbarController = require('./../controllers/navbar');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/show').get(navbarController.show);
Router.route('/add').post(navbarController.add);
Router.route('/delete').delete(navbarController.delete);



//Export----------------------------->
module.exports = Router;