const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    LatestEventTitle: { type: String,  },
    LatestEventText: { type: String,  },
    LatestEventCategory: { type: String,  },
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
const Model = mongoose.model('Calender', Schema);


//Export----------------------------->
module.exports = Model;