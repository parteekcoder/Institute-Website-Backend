const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const InstituteProspectusLinkSchema = new mongoose.Schema(
  {
    InstituteProspectusLink: { type: Object, required: true },
    show: { type: Boolean, default: true },
    order: {
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
      },
    },
  },
  {
    timestamps: true,
  }
);

//Model---------------------------->
const Model = mongoose.model(
  "InstituteProspectusLink",
  InstituteProspectusLinkSchema
);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the InstituteProspectusLink authority':value,'InstituteProspectusLink Value':value}.
// proceed same s about us
