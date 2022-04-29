import faker from "faker";
import Product from "../models/Product.js";

function generateFakeProduct(limit) {
  let products = [];
  for (let i = 0; i < limit; i++) {
    let product = {};
    product.name = faker.commerce.productName();
    product.price = faker.commerce.price();
    product.description = faker.commerce.productDescription();
    product.department = faker.commerce.department();
    product.inStock = faker.datatype.boolean();
    products.push(product);
  }
  return products;
}

async function createFakerProducts(limit) {
  try {
    let products = generateFakeProduct(limit);
    let result = Product.insertMany(products);
  } catch (error) {
    console.log(error.message);
  }
}

export default createFakerProducts;
