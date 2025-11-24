const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.send("❌ Passwords do not match");
    }

    if (password.length < 6) {
        return res.send("❌ Password must be at least 6 characters");
    }

    res.send(`✔ Account Created Successfully for ${username}!`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
