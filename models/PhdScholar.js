const mongoose=require('mongoose');

const Schema=new mongoose.Schema({
    department:{
        type:String,
        enum: ['bt', 'ch', 'cy', 'ce', 'cse', 'ee', 'ece', 'hm', 'ipe', 'it', 'ice', 'ma', 'me', 'ph', 'tt', 'cf']
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
    research_profile: {
        type: [
            {
                "Research Interests": {
                    type: String
                },
                "Brief Research Profile": {
                    type: String
                }
            }
        ],
        default: []
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

module.exports=mongoose.model("PhdScholar",Schema);