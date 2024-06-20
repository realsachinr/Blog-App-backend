const express = require("express");
const router = express.Router();

// import Controllers
const { createComment } = require("../controller/commentController");
const { createPost } = require("../controller/postController");
const { getAllPost } = require("../controller/postController");
const { likePost, unlikePost  } = require("../controller/likeController");

// Define Api
router.post("/createComment", createComment);
router.post("/createPost", createPost);
router.get("/getAllPost", getAllPost);
router.post("/reactStatus/Liked", likePost);
router.post("/reactStatus/unlikePost", unlikePost)

// Export Router
module.exports = router;
