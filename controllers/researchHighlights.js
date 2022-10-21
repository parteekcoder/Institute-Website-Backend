const ResearchHighlights = require("../models/researchHighlights");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addResearchHighlights = async (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const sourceOfInformation = req.body.sourceOfInformation;
  const type = req.body.type;

  const ResearchHighlights = new ResearchHighlights({
    title,
    desc,
    sourceOfInformation,
    type,
  });

  ResearchHighlights
    .save()
    .then(() => res.status(200).send(ResearchHighlights))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
};


exports.showResearchHighlightsbyId = async (req, res) => {
  ResearchHighlights.find({ id: req.params.id })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
};

exports.updateResearchHighlights = async (req, res) => {
  ResearchHighlights.findOneAndUpdate(
    { id: req.params.id },
    {
      title,
      desc,
      sourceOfInformation,
      type,
    }
  )
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
};

exports.deleteResearchHighlights = async (req, res) => {
  ResearchHighlights.findOneAndUpdate({ id: req.params.id }, { $set: { show: false } })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
};

exports.showAllResearchHighlights = async (req, res) => {
  ResearchHighlights.find({})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
}
