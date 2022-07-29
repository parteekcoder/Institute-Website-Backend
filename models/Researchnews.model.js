const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResearchSchema = new Schema({
  researchTitle: { type: String, required: true },
  
  researchText :{type:String,required:true},
  // researchImg :{ data: Buffer, contentType: String },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Research = mongoose.model('Research', ResearchSchema);

module.exports = Research;