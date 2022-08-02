const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    calenderTitle: { type: String, required: true },
    calenderText: { type: String, required: true },
    calenderCategory: { type: String, required: true },
    date: { type: Date, required: true },
    uploadDate: {
        type: Date,
        default: Date.now()
    },
    updateDate: {
        type: Date,
        default: Date.now()
    },
    SourceOfInfo: {
        type: Object,
        default: {
            name: null,
            email: null,
            designation: null,
            department: null
        }
    }
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('Calender', Schema);


//Export----------------------------->
module.exports = Model;