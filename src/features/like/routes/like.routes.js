import express from "express";
import jwtAuth from "../../../middleware/jwtAuth.js";
import { getLikesByPostId, toggleLike} from "../controller/like.controller.js";

const router = express.Router();

router.route("/:postId").get(jwtAuth, getLikesByPostId);
router.route("/toggle/:postId").post(jwtAuth, toggleLike);

export default router;
