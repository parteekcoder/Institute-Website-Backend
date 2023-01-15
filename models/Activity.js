const mongoose =require('mongoose');

const Schema=new mongoose.Schema({
    department:{type:String},
    title: { type: String, },
    desc: { type: String, },
    link:{
        type:String
    },
    order:{
        type: Number,
    },
    new:{
      type: Boolean,
  },
  sourceOfInfo: {
    type: Object,
    default: {
      name: null,
      email: null,
      designation: null,
      department: null,
    }
  },
  show:{type:Boolean,default:true}

},{timestamps:true})

module.exports=mongoose.model('Activity',Schema);