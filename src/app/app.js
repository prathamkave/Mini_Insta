import express from "express";
import postRoute from "../routes/post.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
	res.status(200).json({
		message: "App is running on server",
	});
});

app.use("/api/post", postRoute);

export default app;
