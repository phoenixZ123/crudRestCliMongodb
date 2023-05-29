import mongoose from 'mongoose'


const TodoSchema=new mongoose.Schema({
text:{
    type:String,
    required:true
},
complete:{
    type:Boolean,
    default:false
},
timestamp:{
    type:String,
    default:Date.now()
},
})
//Schema is collection name/
export const Schema=mongoose.model("Schema",TodoSchema)
