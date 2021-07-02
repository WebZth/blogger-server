const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "⚠️{PATH} is required",
    minLength: [3, "⚠️{PATH} must be at least 3 characters"],
  },
  username: {
    type: String,
    trim: true,
    required: "⚠️{PATH} is required",
    minLength: [3, "⚠️{PATH} must be at least 3 characters"],
  },
  email: {
    type: String,
    trim: true,
    unique: "⚠️Email already exists",
    required: "⚠️{PATH} is required",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: "⚠️{PATH} is required",
    minLength: [6, "⚠️{PATH} must be at least 6 characters"],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

// uniqueValidator schema pre-save unique check
userSchema.plugin(uniqueValidator);

// password hash pre-save
userSchema.pre("save", async function (next) {
  const user = this;
  try {
    // new signup
    if (user.isNew) {
      user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
    }
    // update password for existing user
    if (!user.isNew && user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
    }
    next();
  } catch (error) {
    next(error);
  }
});

// compare passwords in db
userSchema.methods = {
  authenticate: async function (plainText, next) {
    try {
      if (plainText) {
        return await bcrypt.compare(plainText, this.password);
      }
    } catch (error) {
      next(error);
    }
  },
};

// data returned as json
userSchema.set("toJSON", {
  transform: (document, returnedDoc) => {
    returnedDoc.id = returnedDoc._id.toString();
    delete returnedDoc.password;
    delete returnedDoc._id;
    delete returnedDoc.__v;
  },
});

module.exports = mongoose.model("User", userSchema);
