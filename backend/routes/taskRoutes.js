const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const taskController = require('../controllers/taskController');

// Create new task
router.post('/', authMiddleware, taskController.createTask);

// Get user tasks
router.get('/', authMiddleware, taskController.getUserTasks);

module.exports = router;

