const About = require("../models/About");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addAbout = async (req, res) => {
  const data = new About({
    About: req.body.About,
  });

  data
    .save()
    .then(() => res.status(201).send("About added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.showAbout = async (req, res) => {
  About.find({ show: true })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.showAboutbyId = async (req, res) => {
  About.findById(req.body.id)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateAbout = async (req, res) => {
  About.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.status(200).send("About updated successfully");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteAbout = async (req, res) => {
  About.findByIdAndUpdate(req.body.id, { $set: { show: false } })
    .then(() => {
      res.status(200).send("About deleted successfully");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.showAllAbout = async (req, res) => {
  About.find({})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).json("Error: " + err));
}