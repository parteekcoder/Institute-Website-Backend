const LatestEvent = require('../models/latestEvent');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addLatestEvent = async (req, res) => {
    const LatestEventTitle = req.body.LatestEventTitle;
    const LatestEventText = req.body.LatestEventText;
    const LatestEventCategory = req.body.LatestEventCategory;
    const date = Date.parse(req.body.date);

    const LatestEvent = new LatestEvent({
        LatestEventTitle,
        LatestEventText,
        LatestEventCategory,
        date
    });

    LatestEvent.save()
        .then(() => res.status(201).json('New Notice Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.getLatestEvent = async (req, res) => {
    LatestEvent.find()
        .then(cal => res.status(200).json(cal))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.getLatestEventFromCategory = async (req, res) => {
    const category = req.params.category;
    LatestEvent.find({ LatestEventCategory: category })
        .then(cal => res.status(200).json(cal))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.updateLatestEvent = async (req, res) => {
    const _id = req.params._id;
    const LatestEventTitle = req.body.LatestEventTitle;
    const LatestEventText = req.body.LatestEventText;
    const LatestEventCategory = req.body.LatestEventCategory;
    const date = Date.parse(req.body.date);

    LatestEvent.findByIdAndUpdate(_id, {
        $set: {
            LatestEventTitle: LatestEventTitle,
            LatestEventText: LatestEventText,
            LatestEventCategory: LatestEventCategory,
            date: date,
        }
    }, { useFindAndModify: false })
        .then(() => res.status(201).json('Notice Updated Successfully!'))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.deleteLatestEvent = async (req, res) => {
    LatestEvent.findByIdAndDelete(req.params._id)
        .then(() => res.status(204).json('Notice deleted.'))
        .catch(err => res.status(404).json('Error: ' + err));
}