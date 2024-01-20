import express from "express";
import jwtAuth from "../../../middleware/jwtAuth.js";
import { imageUpload } from "../../../middleware/upload.js";
import { getAllPosts, createPost, getUserPosts, getPostById, deletePost, updatePost} from "../controller/post.controller.js";

const router = express.Router();

router.route("/").get(jwtAuth, getUserPosts);
router.route("/").post(jwtAuth, imageUpload.single("image"), createPost);
router.route("/all").get(jwtAuth, getAllPosts);
router.route("/:id").get(jwtAuth, getPostById);
router.route("/:id").delete(jwtAuth, deletePost);
router.route("/:id").put(jwtAuth, updatePost);

export default router;
