const express = require("express");
const researchHighlights = require("../controllers/researchHighlights");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").post(researchHighlights.addResearchHighlights).get(researchHighlights.showResearchHighlights);

Router.route("/get/all").get(researchHighlights.showAllResearchHighlights);

Router.route("/:id")
    .patch(researchHighlights.updateResearchHighlights)
    .post(researchHighlights.deleteResearchHighlights);

//Export----------------------------->
module.exports = Router;
