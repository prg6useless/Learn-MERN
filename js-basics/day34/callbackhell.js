const posts = [
  {
    post_id: 1,
    post_title: "First Post",
  },
  {
    post_id: 2,
    post_title: "Second Post",
  },
  {
    post_id: 3,
    post_title: "Third Post",
  },
];

const comments = [
  {
    post_id: 2,
    comment: "Great!",
  },
  {
    post_id: 2,
    comment: "Nice Post!",
  },
  {
    post_id: 3,
    comment: "Good Post!",
  },
];

const getPost = (id, callback) => {
  const post = posts.find((post) => post.post_id === id);
  if (post) {
    callback(null, post);
  } else {
    callback("no post found", undefined);
  }
};

const getComments = (post_id, callback) => {
  const result = comments.filter((comment) => comment.post_id === post_id);
  if (result) {
    callback(null, result);
  } else {
    callback("no comments found", undefined);
  }
};

getPost(4, (error, post) => {
  if (error) {
    return console.log(error);
  }
  console.log({ post });
  getComments(post.post_id, (error, comments) => {
    if (error) {
      return console.llog(error);
    }
    console.log({ comments });
  });
});

// callback nesting in the above getPost function => callback hell
