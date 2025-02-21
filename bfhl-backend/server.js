const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// POST /bfhl
app.post("/bfhl", (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highest_alphabet = alphabets.length ? [alphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: "Shantanu_Singh",
        email: "sshantanu781@gmail.com",
        roll_number: "22BCS15563",
        numbers,
        alphabets,
        highest_alphabet
    });
});

app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.get("/", (req, res) => {
    res.send("Backend is running. Use /bfhl for API.");
});

module.exports = app;
