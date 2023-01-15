const express = require("express");
const rankingController = require("../controllers/ranking");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").post(rankingController.addRanking).get(rankingController.showRanking);

Router.route("/get/all").get(rankingController.showAllRanking);

Router.route("/:id")
    .patch(rankingController.updateRanking)
    .post(rankingController.deleteRanking);

//Export----------------------------->
module.exports = Router;
