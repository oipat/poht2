import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function BlogPostControls({ postId, userRole, actions }) {
  function handleDeleteClick() {
    actions.deleteClicked(postId);
  }

  if (userRole === 'admin') {
    return (
      <span>
        <Link to={`/editpost/${postId}`}>
          <button>Edit post</button>
        </Link>
        <button onClick={handleDeleteClick}>Delete post</button>
      </span>
    );
  }
  return <noscript />;
}

BlogPostControls.propTypes = {
  postId: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

export default BlogPostControls;
