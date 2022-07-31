const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResearchSchema = new Schema(
  {
    id:{type:String,required:true},
    researchTitle: { type: String, required: true },
    researchDesc: { type: String, required: true },
    upload_date: { type: Date,required: true },
    last_update: { type: Date},
    image: { type: String, required: true },
    sourceofinformation: { type: Object, default: {} },
    type: { type: String },
  },
  {
    timestamps: true,
  }
);

const Research = mongoose.model("Research", ResearchSchema);

module.exports = Research;
