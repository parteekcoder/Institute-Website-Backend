const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const YearlyRankingSchema = new mongoose.Schema(
  {
    YearlyRanking: { type: Object, required: true },
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
const Model = mongoose.model("YearlyRanking", YearlyRankingSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the ranking authority':value,'Ranking Value':value}.
// proceed same s about us
