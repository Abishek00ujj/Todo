const router = require('express').Router();
const User = require('../models/user');
const List = require('../models/list');

router.post("/addtask", async (req, res) => {
    try {
        const { title, body, id } = req.body;
        if (!title || !body || !id) {
            return res.status(400).json({ message: "Title, Body, and User ID are required" });
        }

        const existingUser = await User.findById(id);
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


router.put("/updatetask/:id", async (req, res) => {
    try {
        const { title, body} = req.body;
        const taskId = req.params.id;
        if (!title || !body || !taskId) {
            return res.status(400).json({ message: "Title, Body, and Email are required" });
        }
            const list = await List.findByIdAndUpdate(taskId, { title, body }, { new: true });

            if (list) {
                return res.status(200).json({ message: "Task updated", list });
            } else {
                return res.status(404).json({ message: "Task not found" });
            }
      }
      catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

router.delete("/deletetask/:id", async (req, res) => {
    try {
        const task = await List.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        const existingUser = await User.findById(task.user);
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        existingUser.list.pull(task._id);
        await existingUser.save();
        await task.deleteOne();

        return res.status(200).json({ message: "Task deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

router.get("/gettasks/:id", async (req, res) => {
    try {
        const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });

        if (list.length > 0) {
            return res.status(200).json({ list });
        } else {
            return res.status(404).json({ message: "No tasks found" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
