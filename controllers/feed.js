const { validationResult } = require('express-validator'); // add for validation

// implementation of GET /feed/posts-kali
exports.getPostsKali = (req, res, next) => {
  const response = {
    posts: [
      { 
        title: 'List of posts', 
        content: 'Here you go - the list of posts for you!' 
      }
    ]
  };
  res.status(200).json(response);
};

// implementation of POST /feed/post-kali
exports.createPostKali = (req, res, next) => {
  // return error status if request validation is failed
  // see implementation of validation in routes\feed.js
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res
      .status(422)
      .json({
        message: 'Validation failed, entered data is incorrect.',
        errors: errors
      });
    return;  
  }

  // return success status otherwise
  const response = {
    message: 'Your post has been created successfully!',
    post: {
      id: new Date().toISOString(),
      title: req.body.title, 
      content: req.body.content,
      author: req.body.author
    }
  };
  res.status(201).json(response);
};
