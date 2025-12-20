const express = require('express');
const router = express.Router();
const {
    getCategories,
    getCategoryById,
    getProductsByCategory,
    updateCategory,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/stoneProductController');
const { auth, adminOnly } = require('../middlewares/authMiddleware');

router.route('/categories')
    .get(getCategories)
    .post(auth, adminOnly, updateCategory);

router.route('/categories/:id')
    .get(getCategoryById);

router.route('/category/:categoryId')
    .get(getProductsByCategory);

router.route('/')
    .post(auth, adminOnly, createProduct);

router.route('/:id')
    .put(auth, adminOnly, updateProduct)
    .delete(auth, adminOnly, deleteProduct);

module.exports = router;
