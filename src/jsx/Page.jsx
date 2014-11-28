var React = require('react');
var $ = require('jquery');
var Header = require('./Header.jsx').Header;
var Posts = require('./Posts.jsx').Posts;

var Page = React.createClass({
  getInitialState: function() {
    return {
      currentUser: this.props.currentUser,
      data: []
    };
  },

  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="Page">
        <Header currentUser={this.state.currentUser}/>
        <Posts data={this.state.data} currentUser={this.state.currentUser}/>
      </div>
    );
  }
});

exports.Page = Page;