const express = require('express');
const {register , login } = require('../controller/loginController');
const {addProduct,upload} =require('../controller/addProduct');
const { getProducts } = require('../controller/getProducts');
const verifyToken = require('../middleware/authmiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/', login);
router.post('/Product',verifyToken, upload.single('productImage'),addProduct);
router.get('/Productlist',verifyToken ,getProducts)
module.exports = router;