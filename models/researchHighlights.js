const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResearchSchema = new Schema(
  {
    title: { type: String, },
    desc: { type: String, },
    image: { type: String },
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
    type: { type: String },
    show: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Research = mongoose.model("ResearchNews", ResearchSchema);

module.exports = Research;
