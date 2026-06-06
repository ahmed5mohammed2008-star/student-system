const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Static files (HTML/CSS/JS)
app.use(express.static(path.join(__dirname, "public")));

// الصفحة الرئيسية
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API: جلب طالب بالـ id
app.get("/student", (req, res) => {
    try {
        const id = req.query.id;

        const filePath = path.join(__dirname, "students.json");

        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

        const student = data.find(s => s.id === id);

        if (!student) {
            return res.send("Student not found");
        }

        res.json(student);

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

// مهم جدًا لـ Railway
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});