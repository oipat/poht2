import * as types from '../constants/ActionTypes';

const initialState = {
  fetching: false,
  posting: false,
  displayHamburgerMenu: 'none',
};

export default function general(state = initialState, action) {
  let displayHamburgerMenu;
  switch (action.type) {
    case types.POSTS_FETCHING:
      return Object.assign({}, state, { fetching: true });
    case types.POSTS_FETCHED:
      return Object.assign({}, state, { fetching: false });
    case types.HAMBURGER_MENU_CLICKED:
      displayHamburgerMenu =
        state.displayHamburgerMenu === 'block' ? 'none' : 'block';
      return Object.assign({}, state, { displayHamburgerMenu });
    case types.BODY_CLICKED:
      return state.displayHamburgerMenu === 'block' ?
        Object.assign({}, state, { displayHamburgerMenu: 'none' }) :
        state;
    default:
      return state;
  }
}
