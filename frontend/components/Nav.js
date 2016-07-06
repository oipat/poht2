import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'


class Nav extends Component {

  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Front page</Link></li>
          <li><Link to="/newpost">New Post</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
