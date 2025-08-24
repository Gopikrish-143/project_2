const Product = require ('../models/Product.model.js')


const getProducts = async(req,res) => {
    try {
        const listProducts = await Product.find();
       
 // Convert buffer -> base64
    const formattedProducts = listProducts.map((p) => ({
      ...p._doc,
      productImage: p.productImage?.data
        ? `data:${p.productImage.contentType};base64,${p.productImage.data.toString("base64")}`
        : null,
    }));

    res.status(200).json(formattedProducts);
    } 
    catch (error) {
        res.status(500).json({message:"something went Wrong"});
    }

}

module.exports = {getProducts}