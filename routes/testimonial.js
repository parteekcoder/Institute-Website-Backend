const express = require("express");
const testimonial = require("../controllers/testimonial");
//----------------------------------->

//Router
const Router = express.Router();

Router.route("/").post(testimonial.addTestimonial).get(testimonial.getTestimonial);

Router.route("/:id")
    .patch(testimonial.updateTestimonial)
    .post(testimonial.deleteTestimonial);

Router.route("/get/all").get(testimonial.getAllTestimonial);

//Export----------------------------->
module.exports = Router;
