const express = require('express');
const { body } = require('express-validator'); // add for validation
const feedController = require('../controllers/feed');
const router = express.Router();

// GET /feed/posts-kali
router.get('/posts-kali', feedController.getPostsKali);

// POST /feed/post-kali
router.post('/post-kali', [
    // sanitize request body
    // express-validator doc:  https://express-validator.github.io/docs/index.html 
    body('title')
        .trim()
        .isLength({ min: 5, max: 50 }),
    body('content')
        .trim()
        .isLength({ min: 20, max: 10000 }),
    body('author.name')
        .trim()
        .isLength({ min: 1, max: 100 }),
], feedController.createPostKali);

module.exports = router;