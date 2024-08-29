const aiService = require('../services/aiService');

exports.runAIAnalysis = async (req, res) => {
    try {
        const analysisResult = await aiService.analyze(req.body);
        res.json(analysisResult);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
