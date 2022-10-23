const express = require("express");
const researchHighlights = require("../controllers/researchHighlights");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/")
  .post(researchHighlights.addResearchHighlights)
  .get(researchHighlights.showResearchHighlights);

Route.route("/all").get(researchHighlights.showAllResearchHighlights);
  
Router.route("/:id")
  .get(researchHighlights.showResearchHighlightsbyId)
  .patch(researchHighlights.updateResearchHighlights)
  .delete(researchHighlights.deleteResearchHighlights);

//Export----------------------------->
module.exports = Router;
