const { extend } = require("lodash");
const User = require("./../models/User.model");

const create = async (req, res, next) => {
  const user = new User(req.body);
  try {
    if (!user) {
      return res.status(400).send({ error: "⚠️Invalid User" });
    }
    await user.save();
    return res.status(201).send({ user });
  } catch (error) {
    next(error);
  }
};

const list = async (req, res, next) => {
  try {
    const users = await User.find({}).populate(
      "posts",
      "postTitle postContent"
    );
    return res.status(200).send({ users });
  } catch (error) {
    next(error);
  }
};

const userById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id).populate("posts");
    if (!user) {
      return res.status(400).send({ error: "⚠️User not found!" });
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const read = (req, res, next) => {
  try {
    return res.status(200).send(req.user);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    let { _id } = req.user;
    let deletedUser = await User.findByIdAndRemove(_id);
    return res.send({ deletedUser });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    let user = req.user;
    if (req.body) {
      user = extend(user, req.body);
      user.updated_at = Date.now();
      await user.save();
      return res.status(200).send(user);
    } else {
      return res.status(400).send({ error: "No data to update information" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { create, list, userById, read, remove, update };
