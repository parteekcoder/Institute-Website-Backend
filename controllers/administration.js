const administration = require('./../models/administration');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addAdministration = async (req, res) => {
    const title = req.body.title;
    const administrationText = req.body.administrationText;
    const image = req.body.img;
    const directorName = req.body.directorName;
    const date = Date.parse(req.body.date);

    const administration = new administration({
        title,
        administrationText,
        image,
        directorName,
        date
    });

    administration.save()
        .then(() => res.status(201).json('New mesage Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.getAdministration = async (req, res) => {
    administration.find()
        .then(administration => res.status(200).json(administration))
        .catch(err => res.status(404).json('Error: ' + err));
}


//----------------------------------------------------------------------->
exports.updateAdministration = async (req, res) => {
    const _id = req.params._id;
    const title = req.body.title;
    const administrationText = req.body.administrationText;
    const img = req.body.img;

    Notice.findByIdAndUpdate(_id, {
        $set: {
            title: title,
            administrationText: administrationText,
            image: img,
            date: date,
        }
    }, { useFindAndModify: false })
        .then(() => res.status(201).json('administration Updated Successfully!'))
        .catch(err => res.status(404).json('Error: ' + err));
}

