const express = require("express");
const proctorialCellController = require("../controllers/proctorialCell");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").post(proctorialCellController.addProctorialCell).get(proctorialCellController.getProctorialCell);

Router.route("/:id").get(proctorialCellController.getProctorialCellbyId).patch(proctorialCellController.updateProctorialCell).post(proctorialCellController.deleteProctorialCell);

Router.route("/get/all").get(proctorialCellController.getAllProctorialCell);

//Export----------------------------->
module.exports = Router;
