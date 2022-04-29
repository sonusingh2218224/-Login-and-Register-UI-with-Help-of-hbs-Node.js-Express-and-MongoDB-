import mongoose from "mongoose";

const UserSchmea = new mongoose.Schema({
  name: { type: String, maxlength: 200, minlength: 3, required: true },
  role: { type: String, enum: ["Admin", "Cashier", "User"], default: "User" },
  email: {
    type: String,
    minlength: 3,
    maxlength: 200,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 3,
    maxlength: 200,
    required: true,
    unique: true,
  },
  isVerified: { type: Boolean },
});
export default new mongoose.model("userD", UserSchmea);
