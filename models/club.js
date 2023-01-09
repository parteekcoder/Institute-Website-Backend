const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
    {
        name: { type: String },
        desc: { type: String },
        type: { type: String },
        img: { type: String },
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
const Model = mongoose.model("club", Schema);

//Export----------------------------->
module.exports = Model;
