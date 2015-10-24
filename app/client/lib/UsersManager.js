/**
 * @class Users Manager
 */

UsersManager = {
  /**
   * Set field to user profile object
   * @param field {String}
   * @param value {String || Object}
   */
    setToProfile: function (field, value) {
      if (!Meteor.userId) {
        return;
      }
      var doc = {};
      doc["profile." + field] = value;
      console.log(doc);
      Meteor.users.update({_id: Meteor.userId()}, { $set: doc } );
    },

    /**
     * @private
     * @return {Boolean}
     */
    hasUserProfile: function () {
      if (!Meteor.user() || !_.isObject(Meteor.user().profile)) {
        return;
      }
      return true;
    },

    /**
     * Get user type
     * @return userType {String} "guest"/"host"/"none"
     */
    getUserType: function () {
      if (!this.hasUserProfile()) {
        return;
      }
      return Meteor.user().profile.type;
    },

    /**
    * @return users {Array}
    */
    getUsersByType: function (type) {
      return Meteor.users.find({'profile.type': type}).fetch();
    },

    /**
    * @return user {Object}
    */
    getUserById: function (id) {
      return Meteor.users.findOne(id);
    }
}
