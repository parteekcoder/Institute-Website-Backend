const CampusLife = require('./../models/campusLife');
//----------------------------------->

//----------------------------------------------------------------------->
exports.add = async (req, res) => {
    const CampuslifeTitle = req.body.CampuslifesTitle;
    const CampuslifeText = req.body.CampuslifeText;
    const date = Date.parse(req.body.date);

    const Campuslife = new CampusLife({
        CampuslifeTitle,
        CampuslifeText,
        date
    });


    Campuslife.save()
        .then(() => res.json('Topic Added!'))
        .catch(err => res.status(400).json('Error: ' + err));

}
