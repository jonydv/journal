const asyncHandler = require('express-async-handler');
const { Category } = require('../database/models');

const getAllCategories = asyncHandler( async(req, res) => {

    const categories = await Category.findAll({
        order:[['name', 'DESC']]
    });

    if(!categories) throw new Error ('No categories found');
    


    res.json(categories);
});

const getCategoryById = asyncHandler(async(req, res) => {
    const id = req.params.id;

    const category = await Category.findOne({where:{id}});

    if(!category) throw new Error ('Category not found');
    
    res.json(category);
})

const createCategory = asyncHandler(async(req, res) => {
    const {name, description} = req.body;

    const createdCategory = await Category.create({name, description});

    if(!createdCategory) throw new Error('Couldn´t save the category');

    res.json(createdCategory);
})

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory
};