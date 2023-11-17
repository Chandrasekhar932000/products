const express = require('express');
const { addProduct, getProductByID, deleteProduct, getProducts } = require('../controllers/assesment.controller');
const { get } = require('mongoose');



let router = express.Router();

router.post("/addproduct",addProduct);
router.get("/getproductbyid/:pid",getProductByID);
router.get("/getproducts",getProducts)
router.delete("/deleteproductbyid/:pid",deleteProduct);