const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        messageText: { type: String, required: true },
        designation: { type: String,default: "" },
        show: { type: Boolean, default: true },
        image: { type: String, default: "" },
        order:{
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
            }
          },
    },
    {
        timestamps: true,
    }
);

//Model---------------------------->
const Model = mongoose.model("testimonial", Schema);

//Export----------------------------->
module.exports = Model;
