const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CalenderSchema = new Schema({
  calenderTitle: { type: String, required: true },
  calenderText :{type:String,required:true},
  calenderCategory :{type:String,required:true},
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Calender = mongoose.model('Calender', CalenderSchema);

module.exports = Calender;