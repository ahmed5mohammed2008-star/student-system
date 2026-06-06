const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));

app.get("/student", (req, res) => {
    const id = req.query.id;

    const data = JSON.parse(fs.readFileSync("students.json"));

    const student = data.find(s => s.id === id);

    if (!student) {
        return res.send("Student not found");
    }

    res.json(student);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});