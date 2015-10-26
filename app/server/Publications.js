Meteor.publish('messages', function (userId) {
  return Messages.find();
});

Meteor.publish("usersList", function () {
  return Meteor.users.find({}, {
    fields: {
      'profile.firstname': 1,
      'profile.lastname': 1,
      'profile.guestCount': 1,
      'profile.story': 1,
      'profile.type': 1,
      'profile.diet': 1
    }
  });
});
