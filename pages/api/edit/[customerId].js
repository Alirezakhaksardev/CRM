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
    if(req.method === "PATCH"){
        try{
            const data = req.body.data;
            const customer = await Customer.findOne({_id : id});
            customer.name = data.name;
            customer.lastName = data.lastName;
            customer.email = data.email;
            customer.phone = data.phone;
            customer.address = data.address;
            customer.postalCode = data.postalCode;
            customer.date = data.date;
            customer.products = data.products;
            customer.updateAt = Date.now();
            customer.save();

            res.status(200).json({status:"success" , data : customer});
        }catch(err){
            res.status(500).json({status:"Failed" , message:"Edit Data Failed"});
        }
    }
}