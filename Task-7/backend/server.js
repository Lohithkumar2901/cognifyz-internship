require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const externalApiRoutes = require("./routes/externalApiRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/external", externalApiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
