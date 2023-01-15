const mongoose=require('mongoose');

const Schema=new mongoose.Schema({
    department:{
        type:String
    },
    title: {type:String},
    img: {type:String},
    is_active:{
      type:Boolean,
      default:true
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
    show: { type: Boolean, default: true },
    order:{
        type: Number,
    }
},{timestamps:true})

module.exports=mongoose.model("Achievement",Schema);