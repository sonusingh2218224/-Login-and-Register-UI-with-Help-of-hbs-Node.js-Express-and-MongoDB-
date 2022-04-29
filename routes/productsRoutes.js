import express from "express";

import { createProduct, getProduct } from "../controllers/productController.js";
import logger from "../middlewares/logger.js";

const router = express.Router();
router.post("/", createProduct);
router.get("/", logger, getProduct);

export default router;
