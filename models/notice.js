const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    title: { type: String, },
    desc: { type: String, },
    show: { type: Boolean, default: true },
    order:{
        type: Number,
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
    
    image: { type: String, }
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('Notice', Schema);


//Export----------------------------->
module.exports = Model;