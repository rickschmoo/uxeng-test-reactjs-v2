var React = require('react');
var Page = require('./jsx/Page.jsx').Page;

/////////////////////////////////
// Blog users and their avatars
/////////////////////////////////
var userTable = require('./jsx/userTable').userTable;
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


React.render(
  <Page url="data/blog.json" />,
  document.getElementById('blogapp')
);
