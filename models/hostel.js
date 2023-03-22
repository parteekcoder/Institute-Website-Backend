const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
    {
        messageText: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        designation: {
            type: String,
            default: "",
        },
        hostel: {
            type: String,
            default: "",
        },
        profileLink: {
            type: String,
            default: "",
        },
        qualification: {
            type: Object,
            default: {
                degree: "",
                university: "",
                year: "",
            },
        },
        image: {
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
            },
        },
        contact: {
            type: Object,
            default: {
                email: null,
                telNo: null,
                EPABX: null,
                Extn: null,
                fax: null,
            },
        },
        show: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

//Model---------------------------->
const Model = mongoose.model("Hostel", Schema);

//Export----------------------------->
module.exports = Model;

// format of input in api calls

// Format of form:
// 1. it is has the above fields create input feild for all of them
// 2. for the source of info and contact create seperate fields in the form using the default object keys
// 3. keep the table below the input field to view what has been added
// 4. keep an update and delete button in the table
// 5. update pre filled vaues should come along with the update button in the new form
