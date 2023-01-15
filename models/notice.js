const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    title: { type: String,required: true },
    desc: { type: String,default: "" },
    show: { type: Boolean, default: true },
    order:{
        type: Number,
        default: 0
    },
    sourceOfInfo: {
        type: Object,
        default: {
            name: null,
            email: null,
            designation: null,
            department: null
        }
    },
    new:{
        type: Boolean,
        default: true
    },
    
    image: { type: String, default: "" }
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('Notice', Schema);


//Export----------------------------->
module.exports = Model;