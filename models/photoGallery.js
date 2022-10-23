const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
   image:{type:String,required:true},
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('PhotoGallery', Schema);


//Export----------------------------->
module.exports = Model;