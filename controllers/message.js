const Message = require('../models/message');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addMessage = async (req, res) => {
    const title = req.body.title;
    const messageText = req.body.messageText;
    const image = req.body.img;
    const name = req.body.name;
    const SourceOfInfo = req.body.sourceOfInfo;
    const designation = req.body.designation;

    const message = new Message({
        title,
        messageText,
        image,
        name,
        SourceOfInfo,
        designation
    });

    message.save()
        .then(() => res.status(201).json('New mesage Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

//----------------------------------------------------------------------->
exports.getMessage = async (req, res) => {
    Message.find()
        .then(message => res.status(200).json(message))
        .catch(err => res.status(404).json('Error: ' + err));
}


//----------------------------------------------------------------------->
exports.updateMessage = async (req, res) => {
    const _id = req.params._id;
    const title = req.body.title;
    const messageText = req.body.messageText;
    const img = req.body.img;

    Notice.findByIdAndUpdate(_id, {
        $set: {
            title: title,
            messageText: messageText,
            image: img,
            date: date,
        }
    }, { useFindAndModify: false })
        .then(() => res.status(201).json('Message Updated Successfully!'))
        .catch(err => res.status(404).json('Error: ' + err));
}

