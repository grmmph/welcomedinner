/**
 * @class LoginManager
 * Global class for out of the box login logic handling
 * @Usage LoginManager.login();
 * @Usage LoginManager.register();
 */

LoginManager = {
 containerClass: '.login-container',

 /**
  * @private
  * Get email from login from
  * @return Email {String}
  */
 getEmail: function () {
   return $(LoginManager.containerClass + ' #login-email').val();
 },

 /**
  * @private
  * Get password from login from
  * @return Email {String}
  */
 getPassword: function () {
   return $(LoginManager.containerClass + ' #login-password').val();
 },

 /**
  * @private
  * Check if login details are valid
  * @param details {object} contains login details to validate
  * @return isValid {Boolean}
  */
 isLoginDetailsValid: function (details) {
   var details = details || {};

   if (!_.isString(details.password) || !_.isString(details.email)) {
     console.log('Invalid form!')
     return;
   }
   return true;
 },

 /**
  * @public
  */
 register: function () {
  var options = {
     email: LoginManager.getEmail(),
     password: LoginManager.getPassword()
  };

  if (!LoginManager.isLoginDetailsValid(options)) {
    return;
  }
  Accounts.createUser(options, function (err) {
     if (err) {
       LoginManager.handleError(err)
       return;
     }
     Router.go('/profile');
   });
 },

 /**
  * @public
  */
 login: function () {
   var options = {
      email: LoginManager.getEmail(),
      password: LoginManager.getPassword()
   };

   if (!LoginManager.isLoginDetailsValid(options)) {
     return;
   }

   Meteor.loginWithPassword(options.email, options.password, function(err) {
     if (err) {
       LoginManager.handleError(err);
       return;
     }
     Router.go('/');
   });
 },

 /**
  * @private
  * Error handling function
  * @param err {Object}
  */
 handleError: function (err) {
   switch (err.reason) {
     case 'User not found':
        LoginManager.register()
        break;
   }
   console.log(err)
 }
};
