const mongoose=require('mongoose');


const Schema = new mongoose.Schema({
    department: {
        type: String,
        enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
    },
    type:{
        type:String,
        enum:["Departments Societies","Departments Clubs","Departments Team"]
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    img: {
        type: String
    },
    instagram:{
        type:String,
    },
    twitter:{
        type:String,
    },
    linkedin:{
        type:String,
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
    show: { type: Boolean, default: true },
    order: {
        type: Number,
    }
}, { timestamps: true })

module.exports = mongoose.model("SocietyAndClubs", Schema);