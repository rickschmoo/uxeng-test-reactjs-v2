var React = require('react');
var UT = require('./userTable.jsx');


var PostHeader = React.createClass({

  getInitialState: function() {
    return {
      idx: this.props.idx,
      status: ""
    };
  },

  handleDeleteLinkClick: function(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState( { status : "DELETED" } );
    this.props.onPostDeletion();
    console.log("User deleted post " + this.state.idx);

  },

  render: function() {
    // console.log(this.props.author + " maps to " + userTable[this.props.author].image);
    var image_url = UT.IMAGE_URL_PREFIX + UT.getUserImage(this.props.author);
    // var image_url = "TEST";
    if (this.props.author == UT.currentUser.username) {
      console.log("SAME USER - CAN DELETE POST " + this.state.idx);
      deleteLinkClasses = "deleteLink userCanDelete";
    } else {
      deleteLinkClasses = "deleteLink";
    }

    return (
      <div className="PostHeader">
        <div className="headerTextContent">
          <div className="post-author">
            {this.props.author}
          </div>
          <div className="post-time">
            {this.props.time}
          </div>
        </div>
        <div className="avatar">
          <img src={image_url}/>
        </div>
        <div className={deleteLinkClasses}
             onClick={this.handleDeleteLinkClick}>
          xxxxxxx
        </div>
      </div>
    );
  }
});

exports.PostHeader = PostHeader;
