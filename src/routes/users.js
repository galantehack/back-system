const express = require('express');
const router = express.Router();

const { index, create } = require('../controllers/users/UsersController');

// Routes
router.route('/').get(index).post(create);



module.exports = router;