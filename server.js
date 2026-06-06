const express = require("express");
const path = require("path");

const app = express();

// static files
app.use(express.static(path.join(__dirname, "public")));

// root
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// student page
app.get("/student", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "student.html"));
});

// PORT مهم جدًا
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});