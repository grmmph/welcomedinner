/**
 * @type Controller
 * ProfileEditController
 */

ProfileEditController = BaseController.extend({
  data: function () {
    return Meteor.user();
  }
});
