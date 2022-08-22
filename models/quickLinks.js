const mongoose=require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema=new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    links: {
        type:String,
        required:false
    }
}, {
    timestamps: true,
});


//Model---------------------------->
const Model = mongoose.model('quickLinks', Schema);

//Export----------------------------->
module.exports = Model;