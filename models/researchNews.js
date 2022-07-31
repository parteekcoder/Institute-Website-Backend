const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    researchTitle: { type: String, required: true },
    researchText: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('ResearchNews', Schema);


//Export----------------------------->
module.exports = Model;




