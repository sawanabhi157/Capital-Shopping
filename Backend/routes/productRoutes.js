const express = require("express");
const router = new express.Router();
const Product = require("../models/productModel");

// CREATE PRODUCTS
router.post("/products", async (req, res) => {
  try {
    console.log(req.body);
    const productItem = new Product(req.body);
    const createProduct = await productItem.save();
    res.status(201).send(createProduct);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// GET PRODUCT LIST
router.get("/products", async (req, res) => {
  try {
    const productsData = await Product.find();
    res.send(productsData);
  } catch (e) {
    res.send(e);
  }
});

// GET PRODUCT BY ID
router.get("/products/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const productData = await Product.findById({ _id: _id });
    if (!productData) {
      return res.status(404).send();
    } else {
      res.send(productData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

// DELETE PRODUCT
router.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteProduct);
  } catch (e) {
    res.status(500).send(e);
  }
});

// UPDATE
router.patch("/products/:id", async (req, res) => {
  // for showing updated data do new:true
  try {
    const _id = req.params.id;
    const updateProducts = await Product.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateProducts);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
