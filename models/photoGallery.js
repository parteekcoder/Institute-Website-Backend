const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    title: { type: String,  },
    text: { type: String,  },
    category: { type: String,  },
    date: { type: Date,  },

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