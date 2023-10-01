import connectDB from "../../../utils/connectDB";
import Customer from "../../../models/Customer"; 

export default async function handeler(req,res){
    // try{
    //     connectDB();
    // }catch(err){
    //     res.status(500).json({status : "failed" , message : "Can't Connect to DB"});
    // }
    try{
        await connectDB();
    }catch(err){
        res.status(500).json({Error:"connection Failed"});
        return;
    }
    if(req.method === "POST"){
        const data = req.body.data;

        if (!data.name || !data.lastName || !data.email){
            return res
                .status(400).json({status:"failed" , message:"Invalid data"});
        }
        try{
            const customer = await Customer.create(data);
            res.status(201).json({status : "success", message : "Customer Created" , data : customer})
        }catch(err){
            res.status(500).json({status : "failed" , message : "Can't Create Customer"});
        }
    }
    

}