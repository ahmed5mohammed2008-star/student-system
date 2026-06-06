const express = require("express");
const path = require("path");

const app = express();

// لازم public
app.use(express.static(path.join(__dirname, "public")));

// صفحة رئيسية (مهم جدًا عشان Railway)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Student page
app.get("/student", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "student.html"));
});

// مهم جدًا Railway
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});