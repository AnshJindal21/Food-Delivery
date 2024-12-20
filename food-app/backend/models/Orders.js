const mongoose=require("mongoose")
const {Schema}=mongoose;
const Orderschema=new Schema({
    email:{
        type:String,
        required:true
    },
    order_data:{
        type:Array,
        required:true
    }
});
module.exports=mongoose.model('orders',Orderschema);