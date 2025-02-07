const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    link: { type: String, default: "" },
    order: {
      type: Number,
      default: 0,
    },
    img: { type: String, default: "" },
    new: {
      type: Boolean,
      default: true,
    },
    sourceOfInfo: {
      type: Object,
      default: {
        name: null,
        email: null,
        designation: null,
        department: null,
      },
    },
    show: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("UpcomingEvent", Schema);

//Export----------------------------->
module.exports = Model;
