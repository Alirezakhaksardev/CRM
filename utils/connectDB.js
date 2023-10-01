import mongoose from "mongoose";

export default async function connectDB(){
    try{
        if(mongoose.connections[0].readyState) return
         mongoose.set("strictQuery" , false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected To DB");
    }catch(err){
        console.log("Connection Failed");
    }
}