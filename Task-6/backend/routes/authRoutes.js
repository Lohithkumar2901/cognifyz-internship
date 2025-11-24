const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ message: "Registration failed", error });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "Invalid email" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.json({ message: "Incorrect password" });

  const token = jwt.sign({ id: user._id }, "SECRETKEY", { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
});

module.exports = router;
