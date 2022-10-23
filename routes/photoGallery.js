const express = require('express');
const photoGalleryController = require('../controllers/photoGallery');
//----------------------------------->

//Router
const Router = express.Router();


Router.route('/').post(photoGalleryController.add).get(photoGalleryController.get).patch(photoGalleryController.update).delete(photoGalleryController.delete);

//Export----------------------------->
module.exports = Router;