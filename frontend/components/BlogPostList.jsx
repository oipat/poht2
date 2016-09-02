import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import BlogPostControls from './BlogPostControls';

function BlogPostList({ posts, userRole, actions }) {
  return (
    <ul>
      {posts.map(post =>
        <li key={post.id}>
          <h1>
            <Link to={`/viewpost/${post.id}`}>
              {post.title}
            </Link>
          </h1>
          <BlogPostControls postId={post.id} userRole={userRole} actions={actions} />
          <p>{post.body}</p>
        </li>
      )}
    </ul>
  );
}

BlogPostList.propTypes = {
  posts: PropTypes.array.isRequired,
  userRole: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

export default BlogPostList;
