const express = require("express");
const navbarController = require("../controllers/Navbar");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").post(navbarController.create).get(navbarController.show).patch(navbarController.update).delete(navbarController.delete);;

//Export----------------------------->
module.exports = Router;
