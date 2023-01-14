const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    title: { type: String, },
    desc: { type: String, },
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
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("LatestNews", Schema);

//Export----------------------------->
module.exports = Model;
