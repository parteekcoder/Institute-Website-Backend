const mongoose=require('mongoose');

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
    gender: {
        type: String,
        enum: ['male','female','other']
    },
    dob: {
        type: Date,
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
    publications:{
        type: Array,
        default: []
        // Publisher, Authors, ISBN/ISSN, Type, Year, Action
    },
    affiliations:{
        type: Array,
        default: []
        // Designation and Organisation
    },
    affiliations:{
        type: Array,
        default: []
        // Conference, Publication, Publication Link
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
        type: String,
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