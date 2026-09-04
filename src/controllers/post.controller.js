import postModel from "../models/post.model.js";
import { sendFiles } from "../services/storage.service.js";

export const creatPost = async (req, res) => {
	const { caption } = req.body;
	const file = req.file;

	if (!caption || !file)
		return res.status(400).json({
			success: false,
			message: "Fields are required",
		});

	const uploadImage = await sendFiles(file.buffer, file.originalname);

	const post = await postModel.create({
		caption,
		image: uploadImage.url,
	});

	return res.status(201).json({
		success: true,
		message: "Post Created Successfully",
		post,
	});
};

export const getAllPost = async (req, res) => {
	const posts = await postModel.find();

	return res.status(200).json({
		success: true,
		message: "Posts fetched successfully",
		posts,
	});
};

export const getOnePost = async (req, res) => {
	try {
		const post = await postModel.findById(req.params.id);
		if (!post) {
			return res.status(404).json({ success: false, message: "Post not found" });
		}
		return res.status(200).json({ success: true, message: "Post fetched successfully", post });
	} catch (error) {
		return res.status(500).json({ success: false, message: error.message });
	}
};

export const updatePost = async (req, res) => {
	try {
		const { caption } = req.body;
		const file = req.file;

		let updateData = {};
		if (caption) updateData.caption = caption;

		if (file) {
			const uploadImage = await sendFiles(file.buffer, file.originalname);
			updateData.image = uploadImage.url;
		}

		const post = await postModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
		if (!post) {
			return res.status(404).json({ success: false, message: "Post not found" });
		}

		return res.status(200).json({ success: true, message: "Post updated successfully", post });
	} catch (error) {
		return res.status(500).json({ success: false, message: error.message });
	}
};

export const deletePost = async (req, res) => {
	try {
		const post = await postModel.findByIdAndDelete(req.params.id);
		if (!post) {
			return res.status(404).json({ success: false, message: "Post not found" });
		}
		return res.status(200).json({ success: true, message: "Post deleted successfully" });
	} catch (error) {
		return res.status(500).json({ success: false, message: error.message });
	}
};
