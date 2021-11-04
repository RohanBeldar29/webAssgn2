const express = require("express");

const router = express.Router();

const Product = require('../models/products')

router.get('/',async(req,res) => {
  try {
    const products = await Product.find()
    res.json(products);
  } catch(err){
    res.send('Error:' + err);
  }
});

router.get('/:id',async(req,res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch(err){
    res.send('Error:' + err);
  }
});

router.post('/',async (req,res) => {
  const productSave = new Product ({
    productName: req.body.productName,
    productDesc: req.body.productDesc,
    productImage: req.body.productImage,
    productPrice: req.body.productPrice,
    productShippingCost: req.body.productShippingCost
  });
  try {
    const psave = await productSave.save();
    res.json(psave);
  } catch(err) {
    res.send('Error:' + err);
  }

});

module.exports = router;