import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'


class HamburgerMenu extends Component {

  handleClick(e) {
    this.props.actions.onHamburgerMenuClick()
  }

  render() {
    return (
      <div className="hamburger" onClick={this.handleClick.bind(this)}>
        menu
      </div>
    )
  }
}

HamburgerMenu.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default HamburgerMenu
