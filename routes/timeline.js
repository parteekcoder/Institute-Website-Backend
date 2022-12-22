const express = require("express");
const timelineController = require("../controllers/timeline");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").post(timelineController.addTimeline).get(timelineController.showTimeline);

Router.route("/get/all").get(timelineController.showAllTimeline);

Router.route("/:id")
    .get(timelineController.showTimelinebyId)
    .patch(timelineController.updateTimeline)
    .post(timelineController.deleteTimeline);

//Export----------------------------->
module.exports = Router;
