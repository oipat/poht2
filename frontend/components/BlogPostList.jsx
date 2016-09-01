import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import BlogPostControls from './BlogPostControls';

function BlogPostList({ posts, userRole }) {
  return (
    <ul>
      {posts.map(post =>
        <li key={post.id}>
          <Link to={`/viewpost/${post.id}`}>
            {post.title}
          </Link>
          {userRole === 'admin' ?
            <BlogPostControls postId={post.id} userRole={userRole} />
            : null
          }
        </li>
      )}
    </ul>
  );
}

BlogPostList.propTypes = {
  posts: PropTypes.array.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default BlogPostList;
