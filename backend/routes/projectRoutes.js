const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const projectController = require('../controllers/projectController');

// Create new project
router.post('/', authMiddleware, projectController.createProject);

// Get user projects
router.get('/', authMiddleware, projectController.getUserProjects);

module.exports = router;
