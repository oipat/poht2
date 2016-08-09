import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function BlogPostList({ posts }) {
  return (
    <ul>
      {posts.map(post =>
        <li key={post.id}>
          <Link to={`/viewpost/${post.id}`}>
            {post.title}
          </Link>
        </li>
      )}
    </ul>
  );
}

BlogPostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogPostList;
