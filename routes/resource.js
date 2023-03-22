const express = require("express");
const resourceController = require("../controllers/resource");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/")
  .post(resourceController.addResource)
  .get(resourceController.getResource);

Router.route("/get/all").get(resourceController.getResourceall);

Router.route("/:id")
  .patch(resourceController.updateResource)
  .post(resourceController.deleteResource);

//Export----------------------------->
module.exports = Router;
