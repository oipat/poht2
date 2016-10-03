import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from './App';


// function createMockStore(state) {
//   return {
//     subscribe: () => {},
//     dispatch: () => {},
//     getState: () => {
//       return { state };
//     }
//   };
// }
//
// describe('App', () => {
//   it('renders', () => {
//     const component = TestUtils.renderIntoDocument(
//       <App store={createMockStore({})} actions={{}} general={{}}>
//       </App>
//     );
//     const items = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');
//     console.log(items);
//   });
// });
