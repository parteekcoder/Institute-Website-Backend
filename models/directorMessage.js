const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    messageText: {
        type: String,
        required: true
    },
    directorName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true

    }, date: { type: Date, required: true },
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('directorMessage', Schema);

//Export----------------------------->
module.exports = Model;