Meteor.publish('messages', function (userId) {
  return Messages.find();
});

Meteor.publish("usersList", function () {
  return Meteor.users.find({}, {
    fields: {
      'profile': 1,
    }
  });
});

Meteor.users._ensureIndex({ location : "2d" });
Meteor.users._ensureIndex({ location : "2dsphere" });
