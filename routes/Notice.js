const router = require('express').Router();
let Notice = require('../models/Notice.model');

//pushing Notice details. 
router.route('/add').post((req, res) => {
    const noticeTitle = req.body.noticeTitle;
    const noticeText = req.body.noticeText;
    const noticeCategory = req.body.noticeCategory;
    const date = Date.parse(req.body.date);
    
    const notice = new Notice({
        noticeTitle,
        noticeText,
        noticeCategory,
        date
    });
  
    notice.save()
    .then(() => res.json('New Notice Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//fetching all notices
router.route('/get').get((req, res) => {
Notice.find()
    .then(notices => res.json(notices))
    .catch(err => res.status(400).json('Error: ' + err));
});

//fetching all notices from a category
router.route('/get/:category').get((req,res)=>{
    const category = req.params.category;
    Notice.find({noticeCategory:category})
        .then(notices => res.json(notices))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Updating notice from a its _id
router.route('/update/:_id').post((req, res) => {

    const _id = req.params._id;
    const noticeTitle = req.body.noticeTitle;
    const noticeText = req.body.noticeText;
    const noticeCategory = req.body.noticeCategory;
    const date = Date.parse(req.body.date);
  
    Notice.findByIdAndUpdate(_id , {
      $set:{
        noticeTitle : noticeTitle,
        noticeText : noticeText,
        noticeCategory : noticeCategory,
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