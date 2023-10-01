import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req,res){
    try{
        await connectDB();
    }catch(err){
        res.status(500).json({status:"Failed" , message:"connection Failed"});
        return;
    }
    const id = req.query.customerId;
    if(req.method === "DELETE"){
        try{
            await Customer.deleteOne({_id:id})
            res.status(200).json({status:"success" , message:"Delete Data Success"});
        }catch(err){
            res.status(500).json({status:"Failed" , message:"Delete Data Failed"});
        }
    }
}