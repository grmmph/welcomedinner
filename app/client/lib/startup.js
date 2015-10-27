Meteor.subscribe('usersList')
Meteor.subscribe('messages')
Meteor.subscribe('conversations', Meteor.userId());

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
});
