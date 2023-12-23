const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.post('/shorten', urlController.shortenUrl);
router.get('/:shortId', urlController.redirectToOriginalUrl);

module.exports = router;
