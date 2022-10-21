const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    title: { type: String, },
    desc: { type: String, },
    SourceOfInfo: {
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
