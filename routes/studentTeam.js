const express = require("express");
const studentTeamController = require("../controllers/studentTeam");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").post(studentTeamController.addStudentTeam).get(studentTeamController.getStudentTeam);

Router.route("/:id").get(studentTeamController.getStudentTeambyId).patch(studentTeamController.updateStudentTeam).post(studentTeamController.deleteStudentTeam);

Router.route("/get/all").get(studentTeamController.getAllStudentTeam);

//Export----------------------------->
module.exports = Router;
