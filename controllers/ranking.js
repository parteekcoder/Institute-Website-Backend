const Ranking = require("../models/Ranking");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addRanking = async (req, res) => {
  const data = new Ranking({
    Ranking: req.body.Ranking,
  });

  data
    .save()
    .then(() => res.status(201).send("Ranking added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};


exports.showRankingbyId = async (req, res) => {
  Ranking.findById(req.params.id)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateRanking = async (req, res) => {
  Ranking.findByIdAndUpdate(req, req.body)
    .then(() => {
      res.status(200).send("Ranking updated successfully");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteRanking = async (req, res) => {
  Ranking.findByIdAndUpdate(req, { $set: { show: false } })
    .then(() => {
      res.status(200).send("Ranking deleted successfully");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.showAllRanking = async (req, res) => {
  Ranking.find({})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).json("Error: " + err));
}