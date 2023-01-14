const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const TenderSchema = new mongoose.Schema(
    {
        lastDateOfReceiptOfBids: { type: String },
        dateOfOpeningTechnicalBids: { type: String },
        desc: { type: String },
        fileLink: { type: String },
        imageLink: { type: String },
        show: { type: Boolean, default: true },
        order:{
          type: Number,
      },
      new:{
        type: Boolean,
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
const Model = mongoose.model("Tender", TenderSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the Tender authority':value,'Tender Value':value}.
// proceed same s about us
