Meteor.publish('messages', function (userId) {
  return Messages.find();
});
