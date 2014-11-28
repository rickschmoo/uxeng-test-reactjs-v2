var React = require('react');
var Post = require('./Post.jsx').Post;

var Posts = React.createClass({

  handlePostDeletion: function(idx) {
    console.log("POSTS: DELETE LINK CLICKED " + idx);
  },

  render: function() {
    var postNodes = this.props.data.map(function (blogpost, idx) {
      console.log("Generated post " + idx);
      return (
       <Post author={blogpost.username}
             comments={blogpost.comments} 
             body={blogpost.body}
             pubdatetime={blogpost.pubdatetime}
             key={idx}
             thiskey={idx}
             onPostDeletionPosts={this.handlePostDeletion}/>
      );
    });

    return (
      <div className="Posts">
        {postNodes}
      </div>
    );
  }
});
exports.Posts = Posts;