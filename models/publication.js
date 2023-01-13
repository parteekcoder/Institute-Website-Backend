const mongoose = require("mongoose");
//----------------------------------->

//Schema---------------------------->
const PublicationSchema = new mongoose.Schema(
    {
        Publication: { type: Object },
        show: { type: Boolean, default: true },
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
const Model = mongoose.model("Publication", PublicationSchema);

//Export----------------------------->
module.exports = Model;

// object: {'Name of the Publication authority':value,'Publication Value':value}.
// proceed same s about us
