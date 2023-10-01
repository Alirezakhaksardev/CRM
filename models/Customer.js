import { Schema , model , models } from "mongoose";

const customerSchema = new Schema({
    name :{
        type:String,
        require:true,
    },
    lastName : {
        type : String ,
        require:true
    },
    email : {
        type:String,
        require:true
    },
    phone:String,
    address:String,
    postalCode:Number,
    date:Date,
    products:{
        type:Array,
        default:[],
    },
    cratedAt:{
        type : Date ,
        default : () => Date.now() ,
        immutable:true
    },
    updatedAt:{type:Date ,  default : () => Date.now() }

})

const Customer = models.Customer || model("Customer" , customerSchema);

export default Customer