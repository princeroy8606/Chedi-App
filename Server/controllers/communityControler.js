const Community = require("../models/community");
const User = require("../models/user");

exports.addnewPost = async (req, res) => {
  const { userId, caption } = req.body;
  const Image = req.file;
  try {
    const user = await User.findById(JSON.parse(userId));
    const post = new Community({
      name: user?.name,
      userId: user._id,
      description: JSON.parse(caption),
      image: Image.path,
    });
    user.posts.push(post._id);
    await post.save();
    await user.save();
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.comment = async (req, res) => {
  const { userId, Comment, postId } = req.body;
  try {
    const user = await User.findById(userId);
    const post = await Community.findById(postId);
    post.comments.push({
      userId: user._id,
      name: user.name,
      comment: Comment,
    });
    await post.save();
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.likePost = async (req, res) => {
  const { postId, action, userId } = req.body;
  let updatedLikes;
  try {
    const post = await Community.findById(postId);
    if (action === "like") post.likes.push(userId);
    if (action === "dislike") {
      updatedLikes = post.likes.filter(
        (id) => id.toString() !== userId.toString()
      );
      post.likes = updatedLikes;
    }
    await post.save();
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const posts = await Community.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
};
