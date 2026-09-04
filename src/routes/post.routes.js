import express from "express";
import { upload } from "../config/multer.js";
import creatPost from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", upload.single("image"), creatPost);

export default router;
