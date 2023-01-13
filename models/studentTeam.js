const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
    {
        name: { type: String },
        department: { type: String },
        batch: { type: Number },
        show: { type: Boolean, default: true },
        team: { type: String },
        work: { type: String },
        facultyMentor: { type: String },
        taskAssigned: { type: String },
        githubLink: { type: String },
        linkedinLink: { type: String },
        image: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
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
            },
        },
    },
    {
        timestamps: true,
    }
);

//Model---------------------------->
const Model = mongoose.model("studentTeam", Schema);

//Export----------------------------->
module.exports = Model;
