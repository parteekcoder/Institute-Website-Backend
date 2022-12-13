const Testimonial = require("../models/testimonial");

exports.addTestimonial = async (req, res) => {
    const data = new Testimonial(req.body);

    data.save()
        .then(() => res.status(201).json(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.getTestimonial = async (req, res) => {
    Testimonial.find({ show: true })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.getTestimonialbyId = async (req, res) => {
    Testimonial.findById(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateTestimonial = async (req, res) => {
    Testimonial.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.status(200).send("Testimonial updated successfully");
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteTestimonial = async (req, res) => {
    Testimonial.findByIdAndUpdate(req.params.id, { $set: { show: false } })
        .then(() => {
            res.status(200).send("Testimonial deleted successfully");
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.getAllTestimonial = async (req, res) => {
    Testimonial.find()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};
