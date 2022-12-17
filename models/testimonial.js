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
    },
    {
        timestamps: true,
    }
);

//Model---------------------------->
const Model = mongoose.model("testimonial", Schema);

//Export----------------------------->
module.exports = Model;
