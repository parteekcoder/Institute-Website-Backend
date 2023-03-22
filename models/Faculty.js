const mongoose=require('mongoose');
const passport = require('passport');

const Schema=new mongoose.Schema({
    department:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    img:{
        type:String
    },
    position:{
        type:String
    },
    education_qualification:{
        type: Array,
        default: []
    },
    address:{
        type: Object,
        default: {}
    },
    gender: {
        type: String,
        enum: ['male','female','other']
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    dob: {
        type: String,
        default: ''
    },
    father_name: {
        type: String
    },
    designation: {
        type: String
    },
    nationality: {
        type: String
    },
    book_publications:{
        type: Array,
        default: []
        // Publisher, Authors, ISBN/ISSN, Type, Year, Action
    },
    conference_publications:{
        type: Array,
        default: []
        // Confernece
    },
    admin_responsibility:{
        type:Array,
        default:[]
    },
    patent:{
        type:Array,
        default:[]
    },
    phd_supervised:{
        type:Array,
        default:[]
    },
    phd_dissertion:{
        type:Array,
        default:[]
    },
    awards:{
        type:Array,
        default:[],
    },
    affiliations:{
        type: Array,
        default: []
        // Designation and Organisation
    },

    research_profile: {
        type:Array,
        default: []
        // Research Interests, Brief Research Profile
    },
    research_project: {
        type:Array,
        default: []
        // Role, Project Type, Title, Funding Agency, From, To, Amount, Status, Co-investigator
    },
    personal_link: {
        type: Array,
        default:[]
    },
    journal: {
        type:Array,
        default: []
        // Year, Journal, Publication, and Publication Link
    },
    event: {
        type:Array,
        default: []
        // category, type, title, venue, from, to, designation
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
    order:{
        type: Number,
    }
},{timestamps:true})

module.exports=mongoose.model("Faculty",Schema);