const mongoose = require('mongoose');

const AIValidationSchema = new mongoose.Schema({
    input: { type: String, required: true },
    result: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AIValidation', AIValidationSchema);
