const Footer = require("../models/footer");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addFooter = async (req, res) => {
    const footer = new Footer(req.body);

    footer
        .save()
        .then(() => res.status(201).json(footer))
        .catch((err) => res.status(400).json("Error: " + err));
};

//----------------------------------------------------------------------->
exports.getFooter = async (req, res) => {
    Footer.find({ show: true })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(404).json("Error: " + err));
};

exports.updateFooter = async (req, res) => {
    const id = req.params.id;
    Footer.findByIdAndUpdate(id, {
        $set: req.body,
    })
        .then(() => res.status(200).json("Updated Successfully!"))
        .catch((err) => res.status(404).json("Error: " + err));
};

exports.deleteFooter = async (req, res) => {
    const id = req.params.id;
    Footer.findByIdAndUpdate(id, {
        $set: { show: false },
    })
        .then(() => res.status(200).json("Deleted Successfully!"))
        .catch((err) => res.status(404).json("Error: " + err));
};

exports.getFooterAll = async (req, res) => {
    Footer.find({})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(404).json("Error: " + err));
};
