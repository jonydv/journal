const express = require('express');
const { getAllCategories, getCategoryById } = require('../controllers');

const router = express.Router();

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);

module.exports = router;