const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    const { title, description, deadline } = req.body;

    try {
        const newProject = new Project({
            title,
            description,
            deadline,
            user: req.user.id,
        });

        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getUserProjects = async (req, res) => {
    try {
        const projects = await Project.find({ user: req.user.id });
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
