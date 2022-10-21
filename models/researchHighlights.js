const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResearchSchema = new Schema(
  {
    title: { type: String, },
    desc: { type: String, },
    image: { type: String },
    sourceOfInformation: { type: Object, default: {} },
    type: { type: String },
    show: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Research = mongoose.model("ResearchNews", ResearchSchema);

module.exports = Research;
