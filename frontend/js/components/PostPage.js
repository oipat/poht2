var React = require('react');
var BlogiActions = require('../actions/BlogiActions');
var BlogiStore = require('../stores/BlogiStore');


function getAppState() {
  return {
    submitState: BlogiStore.getSubmitState()
  };
}

var PostPage = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state);

    var title = this.state.titleValue;
    var body = this.state.bodyValue;

    BlogiActions.blogPostSubmitted({title: title, body: body});
    // TODO: rather than clearing data, display some fancy
    // spinner thing and when done replace with ok mark, then clear.
  },

  getInitialState: function() {
    return {
      titleValue: "",
      bodyValue: "",
      submitState: "no"
    };
  },

  componentDidMount: function() {
    BlogiStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BlogiStore.removeChangeListener(this._onChange);
  },

  render: function() {

    var pending = this.state.submitState;

    return (
      <div className="postform">
        <form method="post" action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">title:</label>
            <input type="text" className="form-control" id="title"
              onChange={this._titleChanged} value={this.state.titleValue}/>
          </div>
          <div className="form-group">
            <label htmlFor="body">post:</label>
            <textarea id="body" className="form-control"
              value={this.state.bodyValue} onChange={this._bodyChanged}></textarea>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
          <div>
            {pending}
          </div>
        </form>
      </div>
    );
  },

  _onChange: function() {
    var newState = getAppState();
    if(newState.submitState === "ok") {
      this.setState({titleValue: "", bodyValue: ""});
    }
    console.log(newState);
    this.setState(newState);
  },

  _titleChanged: function(e) {
    this.setState({titleValue: e.target.value});
  },

  _bodyChanged: function(e) {
    this.setState({bodyValue: e.target.value});
  }

});

module.exports = PostPage;
