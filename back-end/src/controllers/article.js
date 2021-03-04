const asyncHandler = require('express-async-handler');
const { Article, Category } = require('../database/models');

const getAllArticles = asyncHandler( async (req, res) => {

    const articles = await Article.findAll({
        include: {
            model: Category
        },
        order: [['title', 'DESC']]

    });

    if(!articles) throw new Error('Not articles found');
    
    res.json(articles);
});

const getArticleById = asyncHandler( async (req, res) => {
    const id = req.params.id;

    const article = await Article.findOne({where:{id},
    include: {
        model: Category
    }});

    if(!article) throw new Error('Article not found');

    res.json(article)
})

module.exports = {getAllArticles, getArticleById};