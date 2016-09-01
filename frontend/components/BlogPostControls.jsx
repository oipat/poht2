import React, { PropTypes } from 'react';

function BlogPostControls({ postId, userRole }) {
  if (userRole === 'admin') {
    return (
      <span>
        adminctrlss
      </span>
    );
  }
  return null;
}

BlogPostControls.propTypes = {
  postId: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default BlogPostControls;
