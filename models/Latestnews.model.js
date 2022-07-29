const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LatestnewsSchema = new Schema({
  latestnewsTitle: { type: String, required: true },
  
  latestnewsText :{type:String,required:true},

  date: { type: Date, required: true },
}, {
  timestamps: true,
});
//order

const Latestnews = mongoose.model('Latestnews', LatestnewsSchema);

module.exports = Latestnews;