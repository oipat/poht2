import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'


class Nav extends Component {

  render() {
    return (
      <nav style={{display: this.props.displayMode}}>
        <ul>
          <li><Link to="/">Front page</Link></li>
          <li><Link to="/newpost">New Post</Link></li>
        </ul>
      </nav>
    )
  }
}

Nav.propTypes = {
  displayMode: PropTypes.string.isRequired,
}

export default Nav
