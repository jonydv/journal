const { getAllArticles, getArticleById } = require('./article');
const { getAllCategories, getCategoryById, createCategory } = require('./category');

module.exports = {
    getAllArticles,
    getAllCategories,
    getCategoryById,
    getArticleById,
    createCategory
};