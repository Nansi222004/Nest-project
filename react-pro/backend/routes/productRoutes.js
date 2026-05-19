import express from "express";
import {addProduct, getProducts, deleteProducts} from "../controllers/productControllers.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("image"), addProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProducts);

export default router;
