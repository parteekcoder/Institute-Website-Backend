const express = require('express');
const photoGalleryController = require('../controllers/photoGallery');
//----------------------------------->

//Router
const Router = express.Router();


Router.route('/').get(photoGalleryController.get).post(photoGalleryController.add)
Router.route('/:id').get(photoGalleryController.showById).patch(photoGalleryController.update).delete(photoGalleryController.delete);

//Export----------------------------->
module.exports = Router;