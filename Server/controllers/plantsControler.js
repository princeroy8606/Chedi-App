const User = require("../models/user");

exports.updateUserDetails = async (req, res) => {
  const { userId, bookMarkData, bookMarkId } = req.body;
  let copy;
  try {
    const user = await User.findById(userId);
    if (bookMarkData) user.bookMarks.push(bookMarkData);
    if (bookMarkId) {
      copy = user.bookMarks.filter((bookmark) => bookmark._id !== bookMarkId);
      user.bookMarks = copy;
    }
    console.log(user);
    await user.save();
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAllBookmarks = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  try {
    const user = await User.findById(userId);
    const bookmarks = user.bookMarks;
    res.status(200).json(bookmarks);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addNewPlant = async (req, res) => {
  const { userId, Name, Description, Age, Image, Health } = req.body;
  console.log(req.body);
  try {
    const user = await User.findById(userId);
    user.plants.push({
      name: Name,
      description: Description,
      age: Age,
      plantedDate: Date.now(),
      image: Image,
      health: Health,
    });
    await user.save();
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAllPlantsByUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user.plants);
  } catch (err) {
    res.status(400).json(err);
  }
};
