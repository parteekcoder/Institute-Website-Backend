const express = require("express");
const studyProgramController = require("../controllers/study_programmes");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").post(studyProgramController.addstudyProgrammes).get(studyProgramController.getAllstudyProgrammes);

Router.route("/:dept").get(studyProgramController.getByDeptstudyProgrammes).patch(studyProgramController.addstudyProgrammes).post(studyProgramController.deletestudyProgrammes);

Router.route("/get/all").get(studyProgramController.getAllstudyProgrammes);

//Export----------------------------->
module.exports = Router;
