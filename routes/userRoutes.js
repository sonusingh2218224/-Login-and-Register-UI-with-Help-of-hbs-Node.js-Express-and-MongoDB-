import express from "express";
import connectDB from "../ConnectDB.js";
import {
  CreateUser,
  deleteUSer,
  getUser,
  getUserById,
  updateUser,
} from "../controllers/userControllers.js";

const routes = express.Router();

routes.post("/login", CreateUser);

// get data

routes.get("/:id", getUserById);
routes.delete("/:id", deleteUSer);
routes.patch("/:id", updateUser);

export default routes;
