const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postTitle: {
    type: String,
    trim: true,
    required: "⚠️{PATH} is required",
  },
  postAuthor: {
    type: String,
    trim: true,
  },
  postContent: {
    type: String,
    trim: true,
    required: "⚠️{PATH} is required",
  },
  comments: [
    { content: { type: String, required: "⚠️{PATH} is required" }, date: Date },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
  },
  reactions: {
    thumbsUp: { type: Number, default: 0 },
    hooray: { type: Number, default: 0 },
    heart: { type: Number, default: 0 },
    rocket: { type: Number, default: 0 },
    eyes: { type: Number, default: 0 },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

postSchema.set("toJSON", {
  transform: (document, returnedDoc) => {
    returnedDoc.id = returnedDoc._id.toString();
    delete returnedDoc._id;
    delete returnedDoc.__v;
  },
});

module.exports = mongoose.model("Post", postSchema);
