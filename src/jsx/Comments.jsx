var React = require('react');
var Comment = require('./Comment.jsx').Comment;
var CommentForm = require('./CommentForm.jsx').CommentForm;


var Comments = React.createClass({

  getInitialState: function() {
    return {
      comments: this.props.comments,
    };
  },

  handleCommentSubmit: function(newcomment) {
    // TODO: submit to the server and refresh the list
    var oldcomments = this.state.comments;  

    var builtcomment = {
      'username': currentUser.username,
      // 'author': currentUser.username,
      'body': newcomment.newcomment,
      'pubdatetime': newcomment.newtime // newcomment.time.toString()
    };

    var newcomments = oldcomments.concat([builtcomment]);
    console.log(newcomments);
    this.setState({comments: newcomments});
  },

  render: function() {
    // console.log(this.state.comments);
    var commentNodes = this.state.comments.map(function (comment, idx) {
      return (
       <Comment author={comment.username}
                time={comment.pubdatetime}
                body={comment.body}
                key={idx}/>
      );
    });

    
    console.log("COMMENTS " + this.props.postid + " - todisplay = " + this.props.todisplay);
    if (this.props.todisplay) {
      commentsClasses = "Comments comments-display";
    } else {
      commentsClasses = "Comments";
    }

    return (
      <div className={commentsClasses}>
        {commentNodes}
        <CommentForm
          className={this.props.toDisplay ? "comments-visible": ""}
          onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});

exports.Comments = Comments;
