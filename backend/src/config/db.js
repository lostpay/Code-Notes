import mongoose from "mongoose"

export const connectDB=async()=>{
    try{
        
        await mongoose.connect(process.env.MONGO_URI);

        console.log("mongodb connected");
    }catch(error){
        console.error("mongodb error connection",error);
        process.exit(1);
    }
}



