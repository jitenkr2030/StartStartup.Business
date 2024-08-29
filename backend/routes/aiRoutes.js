const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const aiController = require('../controllers/aiController');

// Run AI analysis
router.post('/analyze', authMiddleware, aiController.runAIAnalysis);

module.exports = router;
