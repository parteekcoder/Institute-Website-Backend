const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    messageText: {
        type: String,
        
    },
    Name: {
        type: String,
        
    },
    designation: {
        type: String,
        
    },
    image: {
        type: String,
        

    }, date: { type: Date,  },
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
const Model = mongoose.model('Administration', Schema);

//Export----------------------------->
module.exports = Model;