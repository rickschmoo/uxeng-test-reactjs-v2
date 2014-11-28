var React = require('react');

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var newcomment = this.refs.newcomment.getDOMNode().value.trim();
    if (!newcomment) {
      return;
    }
    // TODO: send request to the server
    var currentDate = new Date();
    this.props.onCommentSubmit({
      'newcomment': newcomment,
      'newtime': currentDate.toString()
    });
    this.refs.newcomment.getDOMNode().value = '';
    // alert("Got new comment " + newcomment);
  },

  render: function() {
    return (
        <form className="CommentForm" onSubmit={this.handleSubmit}>
          <input type="text" id="newcomment" ref="newcomment"/>
          <button>Post</button>
        </form>
    );
  }
});
exports.CommentForm = CommentForm;