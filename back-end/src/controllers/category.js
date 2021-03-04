const asyncHandler = require('express-async-handler');
const { Category } = require('../database/models');

const getAllCategories = asyncHandler( async(req, res) => {

    const categories = await Category.findAll({
        order:[['name', 'DESC']]
    });

    if(!categories){
        throw new Error ('No categories found');
    }


    res.json(categories);
})

module.exports = {
    getAllCategories
};