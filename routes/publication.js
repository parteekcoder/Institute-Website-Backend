const express = require("express");
const publicationController = require("../controllers/publication");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/")
    .post(publicationController.addPublication)
    .get(publicationController.showPublication);

Router.route("/get/all").get(publicationController.showAllPublication);

Router.route("/:id")
    .get(publicationController.showPublicationbyId)
    .patch(publicationController.updatePublication)
    .post(publicationController.deletePublication);

//Export----------------------------->
module.exports = Router;
