const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/cognifyzDB");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed", error);
  }
};

module.exports = connectDB;
