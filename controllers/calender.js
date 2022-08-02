const Calender = require('./../models/calender');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addCalender = async (req, res) => {
    const calenderTitle = req.body.calenderTitle;
    const calenderText = req.body.calenderText;
    const calenderCategory = req.body.calenderCategory;
    const date = Date.parse(req.body.date);

    const calender = new Calender({
        calenderTitle,
        calenderText,
        calenderCategory,
        date
    });

    calender.save()
        .then(() => res.status(201).json('New Notice Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.getCalender = async (req, res) => {
    Calender.find()
        .then(cal => res.status(200).json(cal))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.getCalenderFromCategory = async (req, res) => {
    const category = req.params.category;
    Calender.find({ calenderCategory: category })
        .then(cal => res.status(200).json(cal))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.updateCalender = async (req, res) => {
    const _id = req.params._id;
    const calenderTitle = req.body.calenderTitle;
    const calenderText = req.body.calenderText;
    const calenderCategory = req.body.calenderCategory;
    const date = Date.parse(req.body.date);

    Calender.findByIdAndUpdate(_id, {
        $set: {
            calenderTitle: calenderTitle,
            calenderText: calenderText,
            calenderCategory: calenderCategory,
            date: date,
        }
    }, { useFindAndModify: false })
        .then(() => res.status(201).json('Notice Updated Successfully!'))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.deleteCalender = async (req, res) => {
    Calender.findByIdAndDelete(req.params._id)
        .then(() => res.status(204).json('Notice deleted.'))
        .catch(err => res.status(404).json('Error: ' + err));
}