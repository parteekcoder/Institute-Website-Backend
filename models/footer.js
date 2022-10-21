const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    title: {
        type: String,
    },
    links: {
        type: String,
    }
}, {
    timestamps: true,
});


//Model---------------------------->
const Model = mongoose.model('quickLinks', Schema);

//Export----------------------------->
module.exports = Model;