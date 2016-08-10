import React, { PropTypes, Component } from 'react';


class HamburgerMenu extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.actions.onHamburgerMenuClick();
  }

  render() {
    return (
      <div className="hamburger" onClick={this.handleClick}>
        menu
      </div>
    );
  }
}

HamburgerMenu.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default HamburgerMenu;
