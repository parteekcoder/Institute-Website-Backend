const express = require('express');
const hostelController = require('../controllers/hostel');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/')
    .post(hostelController.addHostel)
    .get(hostelController.getHostel);

Router.route('/get/all')
    .get(hostelController.getHostelall);

Router.route('/:id').get(hostelController.getHostelbyId).patch(hostelController.updateHostel).post(hostelController.deleteHostel);

//Export----------------------------->
module.exports = Router;
