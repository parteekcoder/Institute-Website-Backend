const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
    {
        heading: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            default: "",
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
        show: { type: Boolean, default: true },
        order:{
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    }
);

//Model---------------------------->
const Model = mongoose.model("about", Schema);

//Export----------------------------->
module.exports = Model;

