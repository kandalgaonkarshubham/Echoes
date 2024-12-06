const express = require('express');
const router = express.Router();
const downloadController = require('../controllers/downloadController');

router.post('/', downloadController.downloadJournal);

module.exports = router;
