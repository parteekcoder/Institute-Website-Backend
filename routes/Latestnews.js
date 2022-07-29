const router = require('express').Router();
let Latestnews = require('../models/Latestnews.model');
let Image=require('../models/Image.model')
 
router.route('/add').post((req, res) => {
    const latestnewsTitle = req.body.latestnewsTitle;
    const latestnewsText = req.body.latestnewsText;
    const date = Date.parse(req.body.date);
    const img=req.body.img;
    
    const latestnews = new Latestnews({
        latestnewsTitle,
        latestnewsText,
        date
    });
  
    const image =new Image({
        img
    });

    latestnews.save()
    .then(() => res.json('News Added!'))
    .catch(err => res.status(400).json('Error: ' + err));

    image.save()
    .then(() => res.json('Image Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;