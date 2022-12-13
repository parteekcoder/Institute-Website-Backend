const Club = require("../models/club");

exports.addClub = async (req, res) => {
    const data = new Club(req.body);

    data.save()
        .then(() => res.status(201).json(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.getClub = async (req, res) => {
    Club.find({ show: true })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.getClubbyId = async (req, res) => {
    Club.findById(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateClub = async (req, res) => {
    Club.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.status(200).send("Club updated successfully");
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteClub = async (req, res) => {
    Club.findByIdAndUpdate(req.params.id, { $set: { show: false } })
        .then(() => {
            res.status(200).send("Club deleted successfully");
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.getAllClub = async (req, res) => {
    Club.find()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};
