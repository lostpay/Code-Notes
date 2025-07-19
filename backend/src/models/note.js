import mongoose from "mongoose";
//the structure for each data from the database
const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true 
    },


},{timestamps:true}//createdAt,updatedAt timestamp
)
const note=mongoose.model("Note",noteSchema)

export default note;