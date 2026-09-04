import express from "express";
import { upload } from "../config/multer.js";
import { creatPost, getAllPost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", upload.single("image"), creatPost);
router.get("/getAllPost", getAllPost);

export default router;
