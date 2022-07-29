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
  // throw an error if request is invalid
  // see implementation of validation in routes\feed.js
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422; // this is a a custom property - name it as you want, e.g. statusCode
    throw error;
  }

  try {
    const data = {
        id: new Date().toISOString(),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    // do something with data, e.g. save in db

    // return the response
    const response = {
      message: 'Your post has been created successfully!',
      data: data
    };
    res.status(201).json(response);

  }
  catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
