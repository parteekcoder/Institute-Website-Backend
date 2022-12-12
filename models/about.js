const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema(
    {
        About: { type: Object },
        show: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

//Model---------------------------->
const Model = mongoose.model("about", Schema);

//Export----------------------------->
module.exports = Model;

// format of input

// 1. it is an object wth key value pair
// 2. key is the sb heading in the about section
// 3. value is the content

// Format of forms:
// 1. two input field which will take the input for the heading and the content
// 2. keep the table below the input field to view what has been added
// 3. keep an update and delete button in the table
// 4. update pre filled vaues should come along with the update button int the new form
