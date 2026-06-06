const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// مهم جدًا لملفات public
app.use(express.static(path.join(__dirname, "public")));

// API
app.get("/student", (req, res) => {
    const id = req.query.id;

    const data = JSON.parse(
        fs.readFileSync(path.join(__dirname, "students.json"), "utf8")
    );

    const student = data.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// صفحة رئيسية (اختياري مهم عشان Railway ما يطلعش Cannot GET /)
app.get("/", (req, res) => {
    res.send("Student System is Running 🚀");
});

// 🚨 أهم سطر في Railway
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});