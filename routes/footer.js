const express = require('express');
const footer = require('../controllers/footer');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(footer.addFooter).get(footer.getFooter);
Router.route('/all').get(footer.getFooterFromcategory);
Router.route('/:_id').patch(footer.updateFooter).post(footer.deleteFooter).get(footer.getFooterById);




//Export----------------------------->
module.exports = Router;