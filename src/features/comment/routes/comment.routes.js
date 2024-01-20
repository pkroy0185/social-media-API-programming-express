import express from "express";
import jwtAuth from "../../../middleware/jwtAuth.js";
import { getCommentsByPostId, addComment, deleteComment, updateComment} from "../controller/comment.controller.js";

const router = express.Router();

router.route("/:postId").get(jwtAuth, getCommentsByPostId);
router.route("/:postId").post(jwtAuth, addComment);
router.route("/:id").delete(jwtAuth, deleteComment);
router.route("/:id").put(jwtAuth, updateComment);

export default router;
