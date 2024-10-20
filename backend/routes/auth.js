const router = require('express').Router();
const User = require("../models/user");
const bcrypt = require('bcryptjs');

router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        const hashPassword = bcrypt.hashSync(password, 8);
        const user = new User({ email, username, password: hashPassword });

        await user.save();
        res.status(201).json({ message: "User registered successfully!", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error!" });
    }
});

// User Login Route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Please sign up first." });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Password is not correct." });
        }
        res.status(200).json({ message: "Login successful!",  others: { _id: user._id, email: user.email, username: user.username }, });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error!" });
    }
});

module.exports = router;
