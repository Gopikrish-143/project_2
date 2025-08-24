const Product = require('../models/Product.model.js');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const addProduct = async (req, res) => {
  try {
    const { productName, productPrice } = req.body;

    const newProduct = new Product({
      productName,
      productPrice,
      createdBy: req.user.username,
      role: req.user.role,
      productImage: req.file
? {
            data: req.file.buffer,
            contentType: req.file.mimetype,
          }
        : null, 
    });

    await newProduct.save();
    res.status(201).json({ message: `New product added successfully` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: `Something went wrong` });
  }
};

module.exports = { addProduct, upload };
