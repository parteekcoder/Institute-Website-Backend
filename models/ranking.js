const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const RankingSchema = new mongoose.Schema(
    {
        Ranking: { type: Object },
        show: { type: Boolean, default: true },
        order:{
          type: Number,
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
    },
    {
        timestamps: true,
    }
);

//Model---------------------------->
const Model = mongoose.model("Ranking", RankingSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the ranking authority':value,'Ranking Value':value}.
// proceed same s about us
