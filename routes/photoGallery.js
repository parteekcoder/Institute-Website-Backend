const express = require("express");
const photoGalleryController = require("../controllers/photoGallery");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").post(photoGalleryController.add).get(photoGalleryController.get);
Router.route("/:id").patch(photoGalleryController.update).post(photoGalleryController.delete);

//Export----------------------------->
module.exports = Router;
