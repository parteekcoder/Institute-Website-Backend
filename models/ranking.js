const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const RankingSchema = new mongoose.Schema({
    ranking:{type: Object},
    show:{type: Boolean, default: true},
},{
    timestamps: true,
});



//Model---------------------------->
const Model = mongoose.model('Ranking', RankingSchema);


//Export----------------------------->
module.exports = Model;

// object: {'Name of the ranking authority':value,'Ranking Value':value}.
// proceed same s about us