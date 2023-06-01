const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    image:{
        required:true,
        type:String
    },
    mobile:{
        required:true,
        type:String,
        unique:true
    }

})
const users=mongoose.model("users",userSchema)

module.exports=users