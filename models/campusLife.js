const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    CampuslifeTitle: { type: String, required: true },
    CampuslifeText: { type: String, required: true },
    CampuslifeCategory: { type: String, required: true },
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
const Model = mongoose.model('CampusLife', Schema);


//Export----------------------------->
module.exports = Model;