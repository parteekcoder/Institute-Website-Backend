const PhotoGallery=require('../models/photoGallery');
//----------------------------------->

//----------------------------------------------------------------------->
exports.add = async (req, res) => {
    const title = req.body.title;
    const desc = req.body.desc;
    const sourceOfInfo = req.body.sourceOfInfo;

    const PhotoGallery = new PhotoGallery({
        title,
        desc,
        sourceOfInfo,
    });

    PhotoGallery.save()
        .then((news) => res.status(201).send(" added successfully"))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.get = async (req, res) => {
    PhotoGallery.find({show:true})
        .then(news => res.status(200).json(news))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.showById = async (req, res) => {
    PhotoGallery.findById(req.params.id).
    then(news => res.status(200).json(news)).
    catch(err => res.status(400).json('Error: ' + err));
}

exports.update = async (req, res) => {
    PhotoGallery.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.status(200).send(" updated successfully");
    }).catch(err => res.status(400).json('Error: ' + err));
}

exports.delete = async (req, res) => {
    PhotoGallery.findByIdAndUpdate(req.params.id,{$set:{show:false}}).then(() => {
        res.status(200).send("updated successfully");
    }).catch(err => res.status(400).json('Error: ' + err));
}

