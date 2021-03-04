const asyncHandler = require('express-async-handler');
const { Article, Category } = require('../database/models');

const getAllArticles = asyncHandler( async (req, res) => {

    const articles = await Article.findAll({
        include: {
            model: Category
        },
        order: [['title', 'DESC']]

    });

    if(!articles){
        throw new Error('not articles found');
    }
    res.json(articles);
})

module.exports = {getAllArticles};