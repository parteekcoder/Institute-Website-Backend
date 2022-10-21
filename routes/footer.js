const express = require('express');
const footer = require('../controllers/footer');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/').post(footer.addFooter).get(footer.getFooter);
Router.route('/get/:caqtegory').get(footer.getFooterFromcategory);
Router.route('/update/:_id').post(footer.updateFooter);
Router.route('/delete/:_id').delete(footer.deleteFooter);



//Export----------------------------->
module.exports = Router;