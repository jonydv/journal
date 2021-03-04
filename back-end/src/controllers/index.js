const { getAllArticles, getArticleById } = require('./article');
const { getAllCategories, getCategoryById } = require('./category');

module.exports = {
    getAllArticles,
    getAllCategories,
    getCategoryById,
    getArticleById
};