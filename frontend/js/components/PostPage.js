var React = require('react');
var BlogiActions = require('../actions/BlogiActions');



var PostPage = React.createClass({

  handleSubmit: function(e) {
    var title = this.refs.title.getDOMNode().value.trim();
    var body = this.refs.body.getDOMNode().value.trim();

    // if(!title || !body) {
    //   return;
    // }

    BlogiActions.blogPostSubmitted({title: title, body: body});
    // TODO: rather than clearing data, display some fancy
    // spinner thing and when done replace with ok mark, then clear.
    this.refs.title.getDOMNode().value = '';
    this.refs.body.getDOMNode().value = '';
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">title:</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label htmlFor="body">post:</label>
            <textarea ref="body"></textarea>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  },

});

module.exports = PostPage;
