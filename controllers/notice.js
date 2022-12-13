const Notice = require("./../models/notice");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addNotice = async (req, res) => {
    const notice = new Notice({
        title: req.body.title,
        desc: req.body.desc,
        sourceOfInfo: req.body.sourceOfInfo,
        image: req.body.image,
    });

    notice
        .save()
        .then((notice) => res.status(200).json(notice))
        .catch((err) => res.status(400).send("Error: " + err));
};

//----------------------------------------------------------------------->
exports.getNotice = async (req, res) => {
    Notice.find({ show: true })
        .then((notices) => res.status(200).json(notices))
        .catch((err) => res.status(404).send("Error: " + err));
};

//----------------------------------------------------------------------->
exports.getNoticeById = async (req, res) => {
    Notice.findById(req.params.id)
        .then((notice) => res.status(200).json(notice))
        .catch((err) => res.status(404).send("Error: " + err));
};

//----------------------------------------------------------------------->
exports.updateNotice = async (req, res) => {
    Notice.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        desc: req.body.desc,
        sourceOfInfo: req.body.sourceOfInfo,
        image: req.body.image,
    })
        .then(() => res.status(200).send("Notice updated."))
        .catch((err) => res.status(404).send("Error: " + err));
};

//----------------------------------------------------------------------->
exports.deleteNotice = async (req, res) => {
    Notice.findByIdAndUpdate(req.params.id, { show: false })
        .then(() => res.status(200).send("Notice deleted."))
        .catch((err) => res.status(404).send("Error: " + err));
};

exports.showallNotice = async (req, res) => {
    Notice.find()
        .then((notices) => res.status(200).send(notices))
        .catch((err) => res.status(404).send("Error: " + err));
};
