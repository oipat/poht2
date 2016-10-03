import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import PostForm from './PostForm';


function createMockStore(state) {
  return {
    subscribe: () => { },
    dispatch: () => { },
    getState: () => state,
  };
}

const testState = { posts: { '1': { id: '1', title: 't', body: 'b' } } };

describe('PostForm', () => {
  it('renders empty form when post id is not provided', () => {
    const tree = TestUtils.renderIntoDocument(
      <PostForm store={createMockStore({})} routeParams={{}} />
    );
    const titleField = TestUtils.findAllInRenderedTree(tree, (component) =>
      component.id && component.id === 'title'
    )[0];
    const bodyField = TestUtils.findAllInRenderedTree(tree, (component) =>
      component.name && component.name === 'body'
    )[0];
    expect(titleField.getAttribute('value')).to.equal('');
    expect(bodyField.textContent).to.equal('');
  });

  it('renders form with prefilled post data when id is provided', () => {
    const tree = TestUtils.renderIntoDocument(
      <PostForm store={createMockStore(testState)} routeParams={{ id: '1' }} />
    );
    const titleField = TestUtils.findAllInRenderedTree(tree, (component) =>
      component.id && component.id === 'title'
    )[0];
    const bodyField = TestUtils.findAllInRenderedTree(tree, (component) =>
      component.name && component.name === 'body'
    )[0];
    expect(titleField.getAttribute('value')).to.equal('t');
    expect(bodyField.textContent).to.equal('b');
  });

  it('calls handleSubmit if post id is not set in state', () => {
    const tree = TestUtils.renderIntoDocument(
      <PostForm store={createMockStore(testState)} routeParams={{}} />
    );
    console.log(tree.refs)
    const titleField = TestUtils.findAllInRenderedTree(tree, (component) =>
      component.id && component.id === 'title'
    )[0];
    TestUtils.Simulate.change(titleField, { target: { value: 'testtitle' } });
    console.log(titleField)
  });
});
