import express from "express";
import jwtAuth from "../../../middleware/jwtAuth.js";
import { imageUpload } from "../../../middleware/upload.js";
import { getAllPosts, createPost, getUserPosts, getPostById, deletePost, updatePost} from "../controller/post.controller.js";

const router = express.Router();

router.route("/").get(jwtAuth, getUserPosts);
router.route("/").post(imageUpload.single("image"), createPost);
router.route("/all").get(getAllPosts);
router.route("/:id").get(getPostById);
router.route("/:id").delete(deletePost);
router.route("/:id").put(updatePost);

export default router;
