const ResearchNews = require("../models/ResearchNews");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addResearchNews = async (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const sourceOfInformation = req.body.sourceOfInformation;
  const type = req.body.type;

  const researchnews = new ResearchNews({
    title,
    desc,
    sourceOfInformation,
    type,
  });

  researchnews
    .save()
    .then(() => res.status(200).send(researchnews))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
};

exports.showResearchNews = async (req, res) => {
  ResearchNews.find({show:true})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
};

exports.showResearchNewsbyId = async (req, res) => {
  ResearchNews.find({ id: req.body.id })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
};

exports.updateResearchNews = async (req, res) => {
  ResearchNews.findOneAndUpdate(
    { id: req.body.id },
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

exports.deleteResearchNews = async (req, res) => {
  ResearchNews.findOneAndUpdate({ id: req.body.id }, { $set: { show: false } })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
};

exports.showAllResearchNews = async (req, res) => {
  ResearchNews.find({})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send("Something Wrong Happened"));
}
