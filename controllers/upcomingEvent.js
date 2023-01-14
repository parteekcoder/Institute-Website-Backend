const UpcomingEvent = require("../models/upcomingEvent");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addUpcomingEvent = async (req, res) => {
    const data = new UpcomingEvent({
        title: req.body.title,
        date: req.body.date ||Date.now(),
        link: req.body.link,
        order: req.body.order,
        img: req.body.img,
        new: req.body.new,
        sourceOfInfo: req.body.sourceOfInfo,
    });

    data.save()
        .then(() => res.status(200).json(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

//----------------------------------------------------------------------->
exports.getUpcomingEvent = async (req, res) => {
    if (req.query.id) {
        const data = await UpcomingEvent.findOne({ _id: req.query.id });
        return res.status(200).json(data);
    } else {
        UpcomingEvent.find({ show: true })
            .then((cal) => res.status(200).json(cal))
            .catch((err) => res.status(404).json("Error: " + err));
    }
};

exports.getUpcomingEventById = async (req, res) => {
    UpcomingEvent.find({ _id: req.params.id })
        .then((cal) => res.status(200).json(cal))
        .catch((err) => res.status(404).json("Error: " + err));
};

exports.getAllUpcomingEvent = async (req, res) => {
    UpcomingEvent.find({})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(404).json("Error: " + err));
};

//----------------------------------------------------------------------->
exports.updateUpcomingEvent = async (req, res) => {
    UpcomingEvent.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        .then(() => res.status(200).json("Event Updated Successfully!"))
        .catch((err) => res.status(404).json("Error: " + err));
};

//----------------------------------------------------------------------->
exports.deleteUpcomingEvent = async (req, res) => {
    UpcomingEvent.findByIdAndUpdate(req.params._id, {
        $set: { show: false },
    })
        .then(() => res.status(200).json("Event deleted successfully!"))
        .catch((err) => res.status(404).json("Error: " + err));
};
