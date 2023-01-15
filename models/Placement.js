const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    department:{
        type:String
    },
    name:{
        type:String
    },
    img:{
        type:String
    },
    company:{
        type:String
    },
    package:{
        type:Number
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
},{timestamps:true}
)

module.exports= mongoose.model("Placement",Schema);