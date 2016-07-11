import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'


class ErrorNotification extends Component {


  handleClick(e) {
    this.props.actions.onHamburgerMenuClick()
  }

  render() {
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}

export default ErrorNotification
