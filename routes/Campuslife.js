const router = require('express').Router();
let Latestnews = require('../models/Campuslife.model');
let Image=require('../models/Image.model')
 
router.route('/add').post((req, res) => {
    const CampuslifeTitle = req.body.CampuslifesTitle;
    const CampuslifeText = req.body.CampuslifeText;
    const date = Date.parse(req.body.date);
    const img=req.body.img;
    
    const Campuslife = new Campuslife({
        CampuslifeTitle,
        CampuslifeText,
        date
    });
  
    const image =new Image({
        img
    });

    Campuslife.save()
    .then(() => res.json('Topic Added!'))
    .catch(err => res.status(400).json('Error: ' + err));

    image.save()
    .then(() => res.json('Image Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;