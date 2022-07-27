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
  // HTTP 200 OK success status response code indicates that the request has succeeded
  res.status(200).json(response);
};

// implementation of POST /feed/post-kali
exports.createPostKali = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const response = {
    message: 'Your post has been created successfully!',
    post: { 
      id: new Date().toISOString(),
      title: title, 
      content: content 
    }
  };
  // HTTP 201 CREATED success status response code indicates that the request has succeeded and has led to the creation of a resource (e..g in db)
  res.status(201).json(response);
};
