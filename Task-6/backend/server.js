const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Protected route example
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "Access granted to protected route" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
