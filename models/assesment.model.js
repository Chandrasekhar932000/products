const mongoose = require('mongoose');


//!!! Creating Structure or Schema for student Collection
let assesmentSchema = new mongoose.Schema(
    {
        productId:
        {
            type:Number,
            required:true,
            unique:true
        },
        productName:
        {
            type:String,
            required:[true,"name is mandatory"],
            minLength:[2,"Name Should contain Atleast 4 Characters"]
        },
        productCategory:
        {
            type:String,
            required:true
        },
        image:
        {
            type:String,
            required:true
        },
        productDescription:
        {
            type:String,
            required:true
        }
    },{
        timestamps:true
    }
)

//^^  Creating Collection
module.exports=new mongoose.model("assesment",assesmentSchema)