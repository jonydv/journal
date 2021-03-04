const express = require('express');

const article = require('./article');

const category = require('./category');

const router = express.Router();

router.use('/articles', article);
router.use('/categories', category);

module.exports = router;