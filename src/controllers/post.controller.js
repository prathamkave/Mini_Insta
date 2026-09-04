import postModel from "../models/post.model.js";
import { sendFiles } from "../services/storage.service.js";

const creatPost = async (req, res) => {
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

export default creatPost;
