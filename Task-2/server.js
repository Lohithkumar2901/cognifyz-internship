const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let users = []; // temporary storage

app.get("/", (req, res) => {
  res.render("index", { error: "" });
});

app.post("/submit", (req, res) => {
  const { name, email, password, age } = req.body;

  // Server-Side Validation
  if (!name || !email || !password || !age) {
    return res.render("index", { error: "All fields are required!" });
  }

  if (password.length < 6) {
    return res.render("index", { error: "Password must be at least 6 characters" });
  }

  users.push({ name, email, age });
  res.render("result", { name, email, age });
});

app.listen(5001, () => console.log("Server running on port 5001"));
