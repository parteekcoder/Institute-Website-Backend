const express = require("express");
const placementStatController = require("../controllers/placementStat");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/")
  .post(placementStatController.addPlacementStat)
  .get(placementStatController.showPlacementStat);

Router.route("/get/all").get(placementStatController.showAllPlacementStat);

Router.route("/:id")
  .patch(placementStatController.updatePlacementStat)
  .post(placementStatController.deletePlacementStat);

//Export----------------------------->
module.exports = Router;
