const express = require('express');
const router = express.Router();

const { index } = require('../controllers/cuestionarios/CuestionariosController');

// Routes
router.route('/').get(index);


module.exports = router;