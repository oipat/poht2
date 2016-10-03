import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Nav({ displayMode }) {
  return (
    <nav style={{ display: displayMode }}>
      <ul>
        <Link to="/"><li>Front page</li></Link>
        <Link to="/newpost"><li>New Post</li></Link>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  displayMode: PropTypes.string.isRequired,
};

export default Nav;
