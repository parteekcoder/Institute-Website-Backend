const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const TimelineSchema = new mongoose.Schema(
    {
        Timeline: { type: Array },
        show: { type: Boolean, default: true },
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
