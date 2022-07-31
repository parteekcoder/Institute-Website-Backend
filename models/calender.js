const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    calenderTitle: { type: String, required: true },
    calenderText: { type: String, required: true },
    calenderCategory: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('Calender', Schema);


//Export----------------------------->
module.exports = Model;