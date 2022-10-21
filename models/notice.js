const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    noticeTitle: { type: String, },
    noticeText: { type: String, },
    noticeCategory: { type: String, },
    date: { type: Date, },

    SourceOfInfo: {
        type: Object,
        default: {
            name: null,
            email: null,
            designation: null,
            department: null
        }
    }
    //new 
    // order change
    //file upload
    //last updated date
    //upload date
    //source of info(e-mail id )
    //name and dest. of person
    //department()
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('Notice', Schema);


//Export----------------------------->
module.exports = Model;