const express = require("express");
const instituteProspectusLinkController = require("../controllers/instituteProspectusLink");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/")
  .post(instituteProspectusLinkController.addInstituteProspectusLink)
  .get(instituteProspectusLinkController.showInstituteProspectusLink);

Router.route("/get/all").get(
  instituteProspectusLinkController.showAllInstituteProspectusLink
);

Router.route("/:id")
  .patch(instituteProspectusLinkController.updateInstituteProspectusLink)
  .post(instituteProspectusLinkController.deleteInstituteProspectusLink);

//Export----------------------------->
module.exports = Router;
