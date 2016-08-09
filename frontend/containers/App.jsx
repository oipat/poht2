import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import HamburgerMenu from '../components/HamburgerMenu';
import * as BlogiActions from '../actions';


class App extends Component {

  constructor() {
    super();
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  handleBodyClick(e) {
    if (e.target.className !== 'hamburger' &&
        e.target.tagName.toLowerCase() !== 'nav') {
      this.props.actions.onBodyClick();
    }
  }

  render() {
    const { actions, general } = this.props;
    return (
      <div className="wrapper" onClick={this.handleBodyClick}>
        <div className="header">
          <h1 className="title">Tittel</h1>
          <HamburgerMenu actions={actions} />
        </div>
        <div className="container">
          <div className="content">
            <Nav displayMode={general.displayHamburgerMenu} />
            {this.props.children}
          </div>
        </div>
        <div className="footer">
          fottter
        </div>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  general: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    general: state.general,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BlogiActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
