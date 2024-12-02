const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.login);
router.post('/', authController.register);

module.exports = router;