import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import ErrorNotification from './ErrorNotification';

class Wrapper extends React.Component {
  render() {
    return this.props.children;
  }
}

describe('ErrorNotification', () => {
  it('renders error message', () => {
    const component = TestUtils.renderIntoDocument(
      <Wrapper>
        <ErrorNotification message="testMessage" />
      </Wrapper>
    );

    const items = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div');
    expect(items[0].textContent).to.equal('testMessage');
  });
});
