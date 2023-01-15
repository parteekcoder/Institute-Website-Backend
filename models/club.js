const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        desc: { type: String,default: "" },
        type: { type: String,default: "" },
        img: { type: String,default: "" },
        show: { type: Boolean, default: true },
        order: {
            type: Number,
            default: 0,
        },
        new:{
            type: Boolean,
            default: true,
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
const Model = mongoose.model("club", Schema);

//Export----------------------------->
module.exports = Model;
