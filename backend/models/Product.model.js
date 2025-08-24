const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  
    {
    productName:{type:String,required:true},
    productPrice:{type:Number,required:true},
    createdBy:{type:String,required:true},
    role:{type:String,required:true},
    productImage:{
        data:Buffer,
        contentType:String,
    }
    
    
}, {
        timestamps:true
    })
const Product = mongoose.model('Product',productSchema);
module.exports = Product;