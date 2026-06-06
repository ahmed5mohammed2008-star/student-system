const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/student", (req, res) => {
    const id = req.query.id;

    const data = JSON.parse(
        fs.readFileSync(path.join(__dirname, "students.json"))
    );

    const student = data.find(s => s.id === id);

    if (!student) {
        return res.send("Student not found");
    }

    res.json(student);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});