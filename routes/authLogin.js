import express from "express";

import { login } from "../controllers/authUser.js";
const router = express.Router();

router.post("/auth", login);

export default login;
