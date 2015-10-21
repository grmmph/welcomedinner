/**
 * @type Controller
 * ProfileEditController
 */

ProfileEditController = BaseController.extend({
  onBeforeAction: function () {
    MapsManager.load();
    this.next();
  }
});
