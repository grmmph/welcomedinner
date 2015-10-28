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

Meteor.publish("conversations", function (userId) {
  return Conversations.find({parties: {$in: [userId]}})
});

Meteor.users._ensureIndex({ location : "2d" });
Meteor.users._ensureIndex({ location : "2dsphere" });

Meteor.publish('images', function(){ return Images.find(); });

Images.deny({
 insert: function(){
 return false;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 },
 download: function(){
 return false;
 }
 });

Images.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});
