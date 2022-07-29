const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CampuslifeSchema = new Schema({
    CampuslifeTitle: { type: String, required: true },
    CampuslifeText :{type:String,required:true},
    CampuslifeCategory :{type:String,required:true},
    // image: {
    //     type: String,
    //     required: true

    // },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Campuslife = mongoose.model('Campuslife', CampuslifeSchema);

module.exports = Campuslife;