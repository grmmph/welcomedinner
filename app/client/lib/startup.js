Meteor.subscribe('usersList')
Meteor.subscribe('Messages')

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
});
