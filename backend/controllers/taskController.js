const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    const { title, description, deadline } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            deadline,
            user: req.user.id,
        });

        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getUserTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
