import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Nav({ displayMode }) {
  return (
    <nav style={{ display: displayMode }}>
      <ul>
        <li><Link to="/">Front page</Link></li>
        <li><Link to="/newpost">New Post</Link></li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  displayMode: PropTypes.string.isRequired,
};

export default Nav;
