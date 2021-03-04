const express = require('express');
const router = express.Router();

const { getAllArticles, getArticleById, createArticle, updateArticle } = require('../controllers/article');


router.route('/')
    .get(getAllArticles)
    .post(createArticle);
router.get('/:id', getArticleById);
router.put('/:id', updateArticle);

module.exports = router;