const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.render("result", { name, email });
});

// Server Start
app.listen(5000, () => console.log("Server running on port 5000"));
