const express = require('express');
const imageUploadController=require('./../controllers/imageUploads');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(imageUploadController.imageUpload.single('image'),imageUploadController.addSingleImage);

//Export----------------------------->
module.exports = Router;