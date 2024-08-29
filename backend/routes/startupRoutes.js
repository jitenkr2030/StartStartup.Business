const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const startupController = require('../controllers/startupController');

// Create new startup
router.post('/', authMiddleware, startupController.createStartup);

// Get all startups
router.get('/', authMiddleware, startupController.getAllStartups);

module.exports = router;
