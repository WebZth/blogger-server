const { extend } = require("lodash");
const User = require("./../models/User.model");
const Post = require("./../models/Post.model");

// !! Helper merhod
const userById = async (id) => {
  try {
    const user = await User.findById(id).populate("posts");
    return user;
  } catch (error) {
    next(error);
  }
};

// create a post
const create = async (req, res, next) => {
  const { _id } = req.auth;
  const post = new Post({ ...req.body, user: _id });
  try {
    const returnedPost = await post.save();
    const creator = await userById(_id);
    creator.posts = creator.posts.concat(returnedPost._id);
    await creator.save();
    return res.status(201).send({ returnedPost });
  } catch (error) {
    next(error);
  }
};

// list all posts
const list = async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate("user", "username name");
    res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
};

const postById = async (req, res, next, id) => {
  try {
    const post = await Post.findById(id).populate("user", "username name");
    req.post = post;
    console.log("post", post);
    next();
  } catch (error) {
    next(error);
  }
};

// read a post
const read = (req, res, next) => {
  try {
    console.log(req.post);
    return res.status(200).send(req.post);
  } catch (error) {
    next(error);
  }
};

// update a post
const update = async (req, res, next) => {
  try {
    let { _id } = req.post;
    let post = req.post;
    post = extend(post, req.body);
    console.log(post);
    post.updated_at = Date.now();
    let updatedPost = await Post.findByIdAndUpdate(_id, post, {
      new: true,
      runValidators: true,
    });
    return res.status(200).send(updatedPost);
  } catch (error) {
    next(error);
  }
};

// remove a post
const remove = async (req, res, next) => {
  try {
    const { _id } = req.post;
    const deletedPost = await Post.findByIdAndRemove(_id);
    return res.send({ deletedPost });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, list, postById, read, update, remove };
