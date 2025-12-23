const express = require('express');
const router = express.Router();
const {
    getHomePage,
    updateHomePage
} = require('../controllers/homePageController');
const { auth, adminOnly } = require('../middlewares/authMiddleware');

// Public route
router.get('/', getHomePage);

// Admin route
router.post('/', auth, adminOnly, updateHomePage);

module.exports = router;
