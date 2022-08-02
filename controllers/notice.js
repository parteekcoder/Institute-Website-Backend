const Notice = require('./../models/notice');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addNotice = async (req, res) => {
    const noticeTitle = req.body.noticeTitle;
    const noticeText = req.body.noticeText;
    const noticeCategory = req.body.noticeCategory;
    const date = Date.parse(req.body.date);

    const notice = new Notice({
        noticeTitle,
        noticeText,
        noticeCategory,
        date
    });

    notice.save()
        .then((notice) => res.status(201).json(notice))
        .catch(err => res.status(400).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.getNotice = async (req, res) => {
    Notice.find()
        .then(notices => res.status(200).json(notices))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.getNoticeFromCategory = async (req, res) => {
    const category = req.params.category;
    Notice.find({ noticeCategory: category })
        .then(notices => res.status(200).json(notices))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.updateNotice = async (req, res) => {
    const _id = req.params._id;
    const noticeTitle = req.body.noticeTitle;
    const noticeText = req.body.noticeText;
    const noticeCategory = req.body.noticeCategory;
    const date = Date.parse(req.body.date);

    Notice.findByIdAndUpdate(_id, {
        $set: {
            noticeTitle: noticeTitle,
            noticeText: noticeText,
            noticeCategory: noticeCategory,
            date: date,
        }
    }, { useFindAndModify: false })
        .then(() => res.status(201).json('Notice Updated Successfully!'))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.deleteNotice = async (req, res) => {
    Notice.findByIdAndDelete(req.params._id)
        .then(() => res.status(204).json('Notice deleted.'))
        .catch(err => res.status(404).json('Error: ' + err));
}