import express from "express";
import { upload } from "../config/multer.js";
import { creatPost, getAllPost, getOnePost, updatePost, deletePost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", upload.single("image"), creatPost);
router.get("/getAllPost", getAllPost);
router.get("/:id", getOnePost);
router.put("/:id", upload.single("image"), updatePost);
router.delete("/:id", deletePost);

export default router;
