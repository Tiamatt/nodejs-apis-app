const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts-kali
router.get('/posts-kali', feedController.getPostsKali);

// POST /feed/post-kali
router.post('/post-kali', feedController.createPostKali);

module.exports = router;