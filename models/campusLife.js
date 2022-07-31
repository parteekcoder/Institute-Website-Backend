const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    CampuslifeTitle: { type: String, required: true },
    CampuslifeText: { type: String, required: true },
    CampuslifeCategory: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('CampusLife', Schema);


//Export----------------------------->
module.exports = Model;