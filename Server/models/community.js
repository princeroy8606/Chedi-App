const mongoose = require("mongoose");

const CommunitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true },
  comments: [
    {
      userId: { type: mongoose.Types.ObjectId, required: true },
      name: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
  likes:[ { type: mongoose.Types.ObjectId, required: true },],
});

const Community = mongoose.model("Community", CommunitySchema);

module.exports = Community;
