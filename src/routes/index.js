const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
  res.send('Hello World');
});

router.use('/users', require('./users'));
router.use('/cuestionarios', require('./cuestionarios'));
router.use('/auth', require('./auth'));

module.exports = router;