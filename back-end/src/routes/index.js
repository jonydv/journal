const express = require('express');
const router = express.Router();

const article = require('./article');

const category = require('./category');



router.use('/articles', article);
router.use('/categories', category);

module.exports = router;