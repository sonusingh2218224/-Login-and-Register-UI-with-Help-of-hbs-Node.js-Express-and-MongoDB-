import mongoose from "mongoose";

async function connectDB() {
  try {
    let result = await mongoose.connect(
      "mongodb+srv://sonu2218224:Sonu1998@cluster0.mpr7k.mongodb.net/myFirstECOMM?retryWrites=true&w=majority"
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
}

export default connectDB;
