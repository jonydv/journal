const express = require('express');
const { getAllCategories, getCategoryById, createCategory } = require('../controllers/category');

const router = express.Router();

router.route('/')
    .get( getAllCategories)
    .post(createCategory);
router.get('/:id', getCategoryById);

module.exports = router;