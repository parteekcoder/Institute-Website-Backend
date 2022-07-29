const router = require('express').Router();
let Calender = require('../models/Calender.model');

//pushing Notice details. 
router.route('/add').post((req, res) => {
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
    .then(() => res.json('New Notice Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//fetching all notices
router.route('/get').get((req, res) => {
Calender.find()
    .then(cal => res.json(cal))
    .catch(err => res.status(400).json('Error: ' + err));
});

//fetching all notices from a category
router.route('/get/:category').get((req,res)=>{
    const category = req.params.category;
    Calender.find({calenderCategory:category})
        .then(cal => res.json(cal))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Updating notice from a its _id
router.route('/update/:_id').post((req, res) => {

    const _id = req.params._id;
    const calenderTitle = req.body.calenderTitle;
    const calenderText = req.body.calenderText;
    const calenderCategory = req.body.calenderCategory;
    const date = Date.parse(req.body.date);
  
    Calender.findByIdAndUpdate(_id , {
      $set:{
        calenderTitle : calenderTitle,
        calenderText : calenderText,
        calenderCategory : calenderCategory,
        date : date,
      }} , {useFindAndModify:false})
      .then(() => res.json('Notice Updated Successfully!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
//Updating notice from a its _id
router.route('/delete/:_id').delete((req, res) => {
Notice.findByIdAndDelete(req.params._id)
    .then(() => res.json('Notice deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;