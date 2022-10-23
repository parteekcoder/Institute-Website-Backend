const administration = require('./../models/administration');
//----------------------------------->


//----------------------------------------------------------------------->
exports.addAdministration = async (req, res) => {
    const administration = new administration(req.body);
    administration.save()
        .then(() => res.status(201).json('Administration Added!'))
        .catch(err => res.status(500).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.getAdministration = async (req, res) => {
    administration.find({show: true, _id: req.params.id})
        .then(administration => res.status(200).json(administration))
        .catch(err => res.status(404).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.deleteAdministration = async (req, res) => {
    administration.findByIdAndUpdate(req.params.id,{
        $set: {
            show: false
        }
    },{ useFindAndModify: false })
        .then(administration => res.status(201).json(administration))
        .catch(err => res.status(400).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.getAdministrationall = async (req, res) => {
    if(req.body.showDeleted){
    administration.find()
        .then(administration => res.status(200).json(administration))
        .catch(err => res.status(404).json('Error: ' + err));
    }else{
        administration.find({show:true})
            .then(administration => res.status(200).json(administration))
            .catch(err => res.status(404).json('Error: ' + err));
    }
}


//----------------------------------------------------------------------->
exports.updateAdministration = async (req, res) => {

    Notice.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        .then(() => res.status(200).json('administration Updated Successfully!'))
        .catch(err => res.status(404).json('Error: ' + err));
}

