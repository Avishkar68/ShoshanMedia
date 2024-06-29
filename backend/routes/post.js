const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getPostOFFollowing,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../controllers/Post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlikePost)
  .put(isAuthenticated,updateCaption)
  .delete(isAuthenticated, deletePost);

router.route("/posts").get(isAuthenticated, getPostOFFollowing);

router.route("/post/comment/:id").post(isAuthenticated , commentOnPost).delete(isAuthenticated , deleteComment)

module.exports = router;
