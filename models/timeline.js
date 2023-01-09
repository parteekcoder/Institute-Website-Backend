const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const TimelineSchema = new mongoose.Schema(
    {
        Timeline: { type: Array },
        show: { type: Boolean, default: true },
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
const Model = mongoose.model("Timeline", TimelineSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the Timeline authority':value,'Timeline Value':value}.
// proceed same s about us
