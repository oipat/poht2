import * as types from '../constants/ActionTypes';

const initialState = {
  fetching: false,
  posting: false,
  displayHamburgerMenu: 'none',
  notifications: [],
};

export default function general(state = initialState, action) {
  let displayHamburgerMenu;
  console.debug(action);
  switch (action.type) {
    case types.POSTS_FETCHING:
      return Object.assign({}, state, { fetching: true });
    case types.POSTS_FETCHED:
      return Object.assign({}, state, { fetching: false });
    case types.POST_DELETED:
      return Object.assign({}, state,
        { notifications: [...state.notifications, 'Post Deleted!'] });
    case types.POST_SAVED:
      return Object.assign({}, state,
        { notifications: [...state.notifications, 'Post Saved!'] });
    case types.POST_UPDATED:
      return Object.assign({}, state,
        { notifications: [...state.notifications, 'Post Edited!'] });
    case types.HAMBURGER_MENU_CLICKED:
      displayHamburgerMenu =
        state.displayHamburgerMenu === 'block' ? 'none' : 'block';
      return Object.assign({}, state, { displayHamburgerMenu });
    case types.BODY_CLICKED:
      return state.displayHamburgerMenu === 'block' ?
        Object.assign({}, state, { displayHamburgerMenu: 'none' }) :
        state;
    case types.ROUTER_LOCATION_CHANGE:
      return Object.assign({}, state, { notifications: [] });
    default:
      return state;
  }
}
