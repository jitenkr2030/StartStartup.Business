const mongoose = require('mongoose');

const StartupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    industry: { type: String, required: true },
    description: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Startup', StartupSchema);
