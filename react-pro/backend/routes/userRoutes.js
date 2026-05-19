import express from "express";
import {signup, login, editPro} from "../controllers/userControllers.js";
import {protect} from "../middleware/authmiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/editPro", protect, upload.single("avatar"), editPro);

export default router;