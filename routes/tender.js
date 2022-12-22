const express = require("express");
const tenderController = require("../controllers/tender");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").post(tenderController.addTender).get(tenderController.showTender);

Router.route("/get/all").get(tenderController.showAllTender);

Router.route("/:id")
    .get(tenderController.showTenderbyId)
    .patch(tenderController.updateTender)
    .post(tenderController.deleteTender);

//Export----------------------------->
module.exports = Router;
