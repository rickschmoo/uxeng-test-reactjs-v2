/** @jsx React.DOM */
var React = require('react');

var Comment = React.createClass({
  render: function() {
    return (
      <div className="Comment">
        Commentyybooxxrreeeeeeerxyyx {this.props.name}
      </div>
    );
  }
});

//module.exports = CommentList;
exports.Comment = Comment;