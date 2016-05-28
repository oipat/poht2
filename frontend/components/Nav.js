import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'


class Nav extends Component {

  render() {
    return (
      <nav>
        <Link to="/">Front page</Link>
        <Link to="/newpost">New Post</Link>
      </nav>
    )
  }
}

export default Nav
