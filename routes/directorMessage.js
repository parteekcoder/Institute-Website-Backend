const router = require('express').Router();
let Message = require('../models/directorNoticeModel');

//pushing Message details. 
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const messageText = req.body.messageText;
    const image = req.body.img;
    const directorName = req.body.directorName;
    const date = Date.parse(req.body.date);

    const message = new Message({
        title,
        messageText,
        image,
        directorName,
        date
    });

    message.save()
        .then(() => res.json('New mesage Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//fetching message data
router.route('/get').get((req, res) => {

    Message.find()
        .then(message => res.json(message))
        .catch(err => res.status(400).json('Error: ' + err));
});



//Updating message from a its _id
router.route('/update/:_id').post((req, res) => {

    const _id = req.params._id;
    const title = req.body.title;
    const messageText = req.body.messageText;
    const img = req.body.img;

    Notice.findByIdAndUpdate(_id, {
        $set: {
            title: title,
            message: messageText,
            image:img,
            date: date,
        }
    }, { useFindAndModify: false })
        .then(() => res.json('Message Updated Successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;