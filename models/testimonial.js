const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
    {
        name: { type: String },
        messageText: { type: String },
        designation: { type: String },
        show: { type: Boolean, default: true },
        image: { type: String },
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
const Model = mongoose.model("testimonial", Schema);

//Export----------------------------->
module.exports = Model;
