const LatestNews = require('./../models/latestNews');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addNews = async (req, res) => {
    const latestnewsTitle = req.body.latestnewsTitle;
    const latestnewsText = req.body.latestnewsText;
    const latestnewsCategory = req.body.latestnewsCategory;
    const date = Date.parse(req.body.date);

    const latestnews = new Latestnews({
        latestnewsTitle,
        latestnewsText,
        latestnewsCategory,
        date
    });

    Latestnews.save()
        .then((news) => res.status(201).json(news))
        .catch(err => res.status(400).json('Error: ' + err));
}
//----------------------------------------------------------------------->
exports.getLatestnews = async (req, res) => {
    Latestnews.find()
        .then(latestnews => res.status(200).json(latestnews))
        .catch(err => res.status(404).json('Error: ' + err));
}
//----------------------------------------------------------------------->
exports.getLatestnewsFromCategory = async (req, res) => {
    const category = req.params.category;
    Latestnews.find({ latestnewsCategory: category })
        .then(latestnews => res.status(200).json(latestnews))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.updateLatestnews = async (req, res) => {
    const _id = req.params._id;
    const latestnewsTitle = req.body.latestnewsTitle;
    const latestnewsText = req.body.latestnewsText;
    const latestnewsCategory = req.body.latestnewsCategory;
    const date = Date.parse(req.body.date);

    Latestnews.findByIdAndUpdate(_id, {
        $set: {
            latestnewsTitle: latestnewsTitle,
            latestnewsText: latestnewsText,
            latestnewsCategory: latestnewsCategory,
            date: date,
        }
    }, { useFindAndModify: false })
        .then(() => res.status(201).json('News Updated Successfully!'))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.deleteLatestnews = async (req, res) => {
    Latestnews.findByIdAndDelete(req.params._id)
        .then(() => res.status(204).json('News deleted.'))
        .catch(err => res.status(404).json('Error: ' + err));
}