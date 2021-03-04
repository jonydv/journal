const express = require('express');
const { getAllCategories } = require('../controllers');

const router = express.Router();

router.use('/', getAllCategories);

module.exports = router;