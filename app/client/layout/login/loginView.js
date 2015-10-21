/**
 * Login View
 */

Template.loginView.events({
  'submit .login-form': function (evt) {
    evt.preventDefault();
    LoginManager.login();
  }
});
