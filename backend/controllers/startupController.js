const Startup = require('../models/Startup');

exports.createStartup = async (req, res) => {
    const { name, industry, description } = req.body;

    try {
        const newStartup = new Startup({
            name,
            industry,
            description,
            owner: req.user.id,
        });

        const startup = await newStartup.save();
        res.json(startup);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAllStartups = async (req, res) => {
    try {
        const startups = await Startup.find().populate('owner', 'name email');
        res.json(startups);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
