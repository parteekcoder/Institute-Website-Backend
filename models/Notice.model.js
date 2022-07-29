const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoticeSchema = new Schema({
  noticeTitle: { type: String, required: true },
  noticeText :{type:String,required:true},
  noticeCategory :{type:String,required:true},
  date: { type: Date, required: true },
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

const Notice = mongoose.model('Notice', NoticeSchema);

module.exports = Notice;