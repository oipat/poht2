var React = require('react');
var BlogiActions = require('../actions/BlogiActions');
var BlogiStore = require('../stores/BlogiStore');


function getAppState() {
  return {
    // posts: BlogiStore.getPosts(),
    submitPending: BlogiStore.isSubmitPending()
  };
}

var PostPage = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value.trim();
    var body = this.refs.body.getDOMNode().value.trim();

    // if(!title || !body) {
    //   return;
    // }

    BlogiActions.blogPostSubmitted({title: title, body: body});
    // TODO: rather than clearing data, display some fancy
    // spinner thing and when done replace with ok mark, then clear.
  },

  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    BlogiStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BlogiStore.removeChangeListener(this._onChange);
  },

  render: function() {

    var pending;
    if(this.state.submitPending === true) {
      pending = "joo";
    }
    else {
      pending = "njää";
    }

    return (
      <div>
        <form method="post" action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">title:</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label htmlFor="body">post:</label>
            <textarea ref="body"></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
          <div>
            {pending}
          </div>
        </form>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getAppState());
  }

});

module.exports = PostPage;
