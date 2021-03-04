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
});

const createArticle = asyncHandler(async(req, res)=> {
    const {title, subtitle, content, image, categoryId} = req.body;

    const createdArticle = await Article.create({title, subtitle, content, image, categoryId});

    if(!createdArticle) throw new Error('Couldn´t save the article');

    res.json(createdArticle);
});

const updateArticle = asyncHandler(async (req, res) => {
    const id = req.params.id;

    const {title, subtitle, content, image, categoryId} = req.body;

    const article = await Article.findByPk(id);

    if(article){
        article.title = title || article.title;
        article.subtitle = subtitle || article.subtitle;
        article.content = content || article.content;
        article.image = image || article.image;
        article.categoryId = categoryId || article.categoryId;
    };

    const updateArticle = await Article.update(article, {where: {id}});

    if(updateArticle !== 0){
        res.json(article);
    }else{
        res.status(400);
        throw new Error('Invalid article data');
    }

    
});

module.exports = {getAllArticles, getArticleById, createArticle, updateArticle};