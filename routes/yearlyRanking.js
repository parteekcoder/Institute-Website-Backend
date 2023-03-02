const express = require("express");
const YearlyRankingController = require("../controllers/yearlyRanking");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/")
  .post(YearlyRankingController.addYearlyRanking)
  .get(YearlyRankingController.showYearlyRanking);

Router.route("/get/all").get(YearlyRankingController.showAllYearlyRanking);

Router.route("/:id")
  .patch(YearlyRankingController.updateYearlyRanking)
  .post(YearlyRankingController.deleteYearlyRanking);

//Export----------------------------->
module.exports = Router;
