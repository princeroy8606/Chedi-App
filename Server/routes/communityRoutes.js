const express = require("express");

const Community = require("../controllers/communityControler");
const upload = require("../utils/multer-config");

const router = express.Router();

router.post("/post",upload.single('image'), Community.addnewPost);
router.get("/posts",Community.getAllPost);
router.post("/post/like", Community.likePost);
router.post("/post/comment", Community.comment);

module.exports = router;
