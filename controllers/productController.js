import Product from "../models/Product.js";

async function createProduct(req, res) {
  try {
    let result = await Product.create(req.body);

    res.status(201).send("product is created");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getProduct(req, res) {
  let { limit, page, soryBy, sortOrder } = req.query;
  try {
    let data = await Product.find()
      .sort({ [soryBy]: sortOrder || -1 })
      // .select(["name", "price"])
      .limit(limit || 10)
      .skip(parseInt(page) * limit);
    // .sort({ price: 1 })
    // .skip(10)
    // .limit(20);
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}
export { createProduct, getProduct };
