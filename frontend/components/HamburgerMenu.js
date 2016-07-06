import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'


class HamburgerMenu extends Component {


  handleClick(e) {
    console.log(this.state)
    //function not implemented yet
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

export default HamburgerMenu
