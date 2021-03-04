const express = require('express');
const { getAllCategories, getCategoryById, createCategory } = require('../controllers');

const router = express.Router();

router.get('/', getAllCategories);
router.post('/', createCategory);
router.get('/:id', getCategoryById);

module.exports = router;