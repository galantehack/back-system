const express = require('express');
const router = express.Router();

const { logIn } = require('../controllers/auth/AuthController');

// Routes
router.route('/log-in').post(logIn);



module.exports = router;