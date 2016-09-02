import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import Notification from '../components/Notification';
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
          <Link to="/"><h1 className="title">Tittel</h1></Link>
          <HamburgerMenu actions={actions} />
        </div>
        <div className="container">
          <div className="content">
            {general.notifications.map((notification, index) =>
              <Notification message={notification} key={index} />)}
            <Nav displayMode={general.displayHamburgerMenu} />
            {this.props.children}
          </div>
        </div>
        <br style={{ clear: 'both' }} />
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
