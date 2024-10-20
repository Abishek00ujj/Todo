const router = require('express').Router();
const User = require('../models/user');
const List = require('../models/list');

// Add task
router.post("/addtask", async (req, res) => {
    try {
        const { title, body, id } = req.body;

        // Validate required fields
        if (!title || !body || !id) {
            return res.status(400).json({ message: "Title, Body, and User ID are required" });
        }

        const existingUser = await User.findOne({ id });

        if (existingUser) {
            const list = new List({ title, body, user: existingUser._id });
            await list.save();

            existingUser.list.push(list._id);
            await existingUser.save();

            return res.status(200).json({ list });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Update task
router.put("/updatetask/:id", async (req, res) => {
    try {
        const { title, body, email } = req.body;

        if (!title || !body || !email) {
            return res.status(400).json({ message: "Title, Body, and Email are required" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const list = await List.findByIdAndUpdate(req.params.id, { title, body }, { new: true });

            if (list) {
                return res.status(200).json({ message: "Task updated", list });
            } else {
                return res.status(404).json({ message: "Task not found" });
            }
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Delete task
router.delete("/deletetask/:id", async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const list = await List.findByIdAndDelete(req.params.id);

            if (list) {
                existingUser.list.pull(list._id);
                await existingUser.save();
                return res.status(200).json({ message: "Task deleted" });
            } else {
                return res.status(404).json({ message: "Task not found" });
            }
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Get tasks for a user
router.get("/gettasks/:id", async (req, res) => {
    try {
        const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });

        if (list.length > 0) {
            res.status(200).json({ list });
        } else {
            res.status(404).json({ message: "No tasks found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
