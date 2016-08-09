import React, { PropTypes } from 'react';

function BlogPost({ post }) {
  return (
    <div>
      <h1>
        {post.title}
      </h1>
      <p>
        {post.body}
      </p>
    </div>
  );
}


BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogPost;
