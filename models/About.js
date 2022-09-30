const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const AboutSchema = new mongoose.Schema({
    about:{type: Object, required: true},
    show:{type: Boolean, default: true},
},{
    timestamps: true,
});

AboutSchema.virtuals('id').get(function(){
    return this._id.toHexString();
});  

AboutSchema.set('toJSON',{
    virtuals: true,
});

//Model---------------------------->
const Model = mongoose.model('About', AboutSchema);


//Export----------------------------->
module.exports = Model;

// object: {'Title of the About section':value,'About Content':value}.
