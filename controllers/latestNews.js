const LatestNews=require('../models/LatestNews');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addNews = async (req, res) => {
    const title = req.body.title;
    const desc = req.body.desc;
    const sourceOfInfo = req.body.sourceOfInfo;

    const latestNews = new Latestnews({
        title,
        desc,
        sourceOfInfo,
    });

    latestNews.save()
        .then((news) => res.status(201).send("News added successfully"))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.showNews = async (req, res) => {
    LatestNews.find({show:true})
        .then(news => res.status(200).json(news))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.showNewsbyId = async (req, res) => {
    LatestNews.findById(req.body.id).
    then(news => res.status(200).json(news)).
    catch(err => res.status(400).json('Error: ' + err));
}

exports.updateNews = async (req, res) => {
    LatestNews.findByIdAndUpdate(req.body.id, req.body).then(() => {
        res.status(200).send("News updated successfully");
    }).catch(err => res.status(400).json('Error: ' + err));
}

exports.deleteNews = async (req, res) => {
    LatestNews.findByIdAndUpdate(req.body.id,{$set:{show:false}}).then(() => {
        res.status(200).send("News updated successfully");
    }).catch(err => res.status(400).json('Error: ' + err));
}

exports.showAllNews = async (req, res) => {
    LatestNews.find()
        .then(news => res.status(200).json(news))
        .catch(err => res.status(400).json('Error: ' + err));
}