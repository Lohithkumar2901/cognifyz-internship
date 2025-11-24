const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

let users = []; // Temporary storage for CRUD demonstration

app.get("/", (req, res) => {
    res.render("index");
});

// CREATE
app.post("/api/users", (req, res) => {
    const user = { id: Date.now(), name: req.body.name, email: req.body.email };
    users.push(user);
    res.json({ message: "User created", user });
});

// READ
app.get("/api/users", (req, res) => {
    res.json(users);
});

// UPDATE
app.put("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ message: "User not found" });
    
    user.name = req.body.name;
    user.email = req.body.email;
    res.json({ message: "User updated", user });
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: "User deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
