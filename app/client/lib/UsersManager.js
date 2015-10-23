/**
 * @class Users Manager
 */

UsersManager = {
    setToProfile: function (field, value) {
      if (!Meteor.userId) {
        return;
      }
      var doc = {};
      doc["profile." + field] = value;
      console.log(doc);
      Meteor.users.update({_id: Meteor.userId()}, { $set: doc } );
    }
}
