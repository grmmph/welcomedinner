Template.registerHelper('user', function () {
  return Meteor.user();
});

Template.registerHelper('isHost', function () {
  return UsersManager.getUserType() === "host";
});

Template.registerHelper('isGuest', function () {
  return UsersManager.getUserType() === "guest";
});

Template.registerHelper('isNeither', function () {
  return UsersManager.getUserType() === "none";
});
