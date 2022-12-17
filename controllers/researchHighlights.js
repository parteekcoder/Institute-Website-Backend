const ResearchHighlights = require("../models/researchHighlights");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addResearchHighlights = async (req, res) => {
    const title = req.body.title;
    const desc = req.body.desc;
    const sourceOfInformation = req.body.sourceOfInformation;
    const type = req.body.type;

    const researchHighlights = new ResearchHighlights({
        title,
        desc,
        sourceOfInformation,
        type,
    });

    researchHighlights
        .save()
        .then(() => res.status(200).json(researchHighlights))
        .catch((err) => res.status(400).send("Something Wrong Happened"));
};

exports.showResearchHighlightsbyId = async (req, res) => {
    ResearchHighlights.find({ id: req.params.id })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).send(err));
};

exports.updateResearchHighlights = async (req, res) => {
    ResearchHighlights.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).send(err));
};

exports.deleteResearchHighlights = async (req, res) => {
    ResearchHighlights.findByIdAndUpdate(req.params.id, { $set: { show: false } })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).send(err));
};

exports.showAllResearchHighlights = async (req, res) => {
    ResearchHighlights.find({})
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).send("Something Wrong Happened"));
};

exports.showResearchHighlights = async (req, res) => {
    ResearchHighlights.find({ show: true })
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).send("Something Wrong Happened"));
};
