var React = require('react');

var userTable = require('./userTable.jsx').userTable;
var IMAGE_URL_PREFIX = "assets/img/";
currentUser = {
  username: "luke" 
};
var getUserImage = function(username) {
  if (userTable[username]) {
    console.log("Returned image for " + username);
    return userTable[username].image;
  } else {
    console.log("Image for " + username + " NOT FOUND");
    return "";
  }
};

var CommentHeader = React.createClass({
  render: function() {
    var image_url = IMAGE_URL_PREFIX + getUserImage(this.props.author);
    return (
      <div className="CommentHeader">
        <div className="commentHeaderTextContent">
          <div className="comment-author">
            {this.props.author}
          </div>
          <div className="comment-time">
            {this.props.time}
          </div>
        </div>
        <div className="avatar">
          <img src={image_url}/>
        </div>
      </div>
    );
  }
});

exports.CommentHeader = CommentHeader;
