const Cell = require("../models/Cell");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addCell = async (req, res) => {
  const data = new Cell({
    Cell: req.body.Cell,
  });

  data
    .save()
    .then(() => res.status(201).send("Cell added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.showCell = async (req, res) => {
  Cell.find({ show: true })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.showCellbyId = async (req, res) => {
  Cell.findById(req.body.id)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateCell = async (req, res) => {
  Cell.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.status(200).send("Cell updated successfully");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteCell = async (req, res) => {
  Cell.findByIdAndUpdate(req.body.id, { $set: { show: false } })
    .then(() => {
      res.status(200).send("Cell deleted successfully");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.showAllCell = async (req, res) => {
  Cell.find({})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).json("Error: " + err));
}