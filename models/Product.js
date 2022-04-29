import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, maxlength: 100, required: true },
  price: { type: Number, min: 0.01, max: 100000, required: true },
  description: { type: String, minlength: 5, maxlength: 300, required: true },
  image: { type: Array },
  inStock: { type: Boolean },
  department: { type: String, minlength: 2, maxlength: 50, required: true },
});
export default new mongoose.model("products", productSchema);
