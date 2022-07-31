const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    latestnewsTitle: { type: String, required: true },
    latestnewsText: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('LatestNews', Schema);

//Export----------------------------->
module.exports = Model;