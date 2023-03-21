const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
  {
    resourceName: {
      type: String,
      trim: true,
    },
    resourceType: {
      type: String,
      trim: true,
    },
    resourceLink: {
      type: String,
      trim: true,
    },

    resourceFileType: {
      type: String,
      enum: ["pdf", "video", "audio", "image", "other"],
      trim: true,
    },
    resourceDescription: {
      type: String,
      trim: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("Resource", Schema);

//Export----------------------------->
module.exports = Model;
