const express = require('express');
const footer = require('../controllers/footer');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(footer.addFooter).get(footer.getFooter);

Router.route('/get/all').get(footer.getFooterAll);

Router.route('/:_id').patch(footer.updateFooter).post(footer.deleteFooter).get(footer.getFooterById);




//Export----------------------------->
module.exports = Router;