const express = require('express');
const navbarController = require('./../controllers/navbar');
const bodyParser = require("body-parser");
const Router = express.Router();

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));
//----------------------------------->


Router.route('/show').get(navbarController.show);
Router.route('/add').post(navbarController.add);
Router.route('/delete').post(navbarController.delete);
Router.route('/create').post(navbarController.create);



//Export----------------------------->
module.exports = Router;