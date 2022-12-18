const About = require("../models/about");

exports.addAbout = async (req, res) => {
    const data = new About(req.body);

    data.save()
        .then(() => res.status(201).json(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.getAbout = async (req, res) => {
    About.find({ show: true })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.getAboutbyId = async (req, res) => {
    About.findById(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateAbout = async (req, res) => {
    About.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.status(200).send("About updated successfully");
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteAbout = async (req, res) => {
    About.findByIdAndUpdate(req.params.id, { $set: { show: false } })
        .then(() => {
            res.status(200).send("About deleted successfully");
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.getAllAbout = async (req, res) => {
    About.find()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};
