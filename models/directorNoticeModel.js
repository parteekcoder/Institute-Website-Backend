const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const message = new Schema({
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
// 
const directorMesage = mongoose.model('Message', message);

module.exports = directorMesage;