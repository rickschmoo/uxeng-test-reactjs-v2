var React = require('react');
var PostHeader = require('./PostHeader.jsx').PostHeader;
var Comments = require('./Comments.jsx').Comments;

var Post = React.createClass({

  getInitialState: function() {
    return {
      comments: this.props.comments,
      showComments: false,
      idx: this.props.thiskey,
      status: ""
    };
  },

  handlePostDeletionTwo: function() {
    console.log("POST received DELETE");
    this.props.onPostDeletionPosts(this.state.idx);
  },

  handleCommentsLinkClick: function(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState( { showComments : !this.state.showComments } );
    console.log("Click on post " + this.state.idx);
  },

  render: function() {
    // console.log("RENDER: SHOWCOMMENTS IS " + this.state.showComments);
    var displaySetting;
    if (this.state.showComments) {
      displaySetting = "true";
    } else {
      displaySetting = "false";
    }
    return (
      <div className="Post">
        <PostHeader author={this.props.author}
                    time={this.props.pubdatetime}
                    idx={this.state.idx}
                    onPostDeletion={this.handlePostDeletionTwo}/>
        <div className="blogpost-body">{this.props.body}</div>
        <div className="comments-link"
             onClick={this.handleCommentsLinkClick}>
          {this.props.comments.length} Comments (show {displaySetting})
        </div>
        <Comments postid={this.state.idx}
                  comments={this.props.comments}
                  todisplay={this.state.showComments}/>
      </div>
    );
  }
});

exports.Post = Post;
