// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// A protected route example: get current user's profile
router.get('/profile', authMiddleware, userController.getProfile);

module.exports = router;
