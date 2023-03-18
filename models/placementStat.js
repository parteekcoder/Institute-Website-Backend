const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const PlacementStatSchema = new mongoose.Schema(
  {
    PlacementStat: { type: Object, required: true },
    show: { type: Boolean, default: true },
    order: {
      type: Number,
      default: 0,
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
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model("PlacementStat", PlacementStatSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the PlacementStat authority':value,'PlacementStat Value':value}.
// proceed same s about us
