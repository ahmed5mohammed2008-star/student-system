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

// PORT - تم التعديل هنا لضمان وجود قيمة احتياطية ومنع انهيار السيرفر
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});