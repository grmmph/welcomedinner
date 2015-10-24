/**
 * Routes
 * @NOTE Pleaes make sure this file is clean from logic.
 * @NOTE Each route can have an specific controller with all the logic needed.
 */

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('mainLandingView', {
		path: '/',
	  template: 'mainLandingView'
	});

  this.route('login', {
		path: '/login',
	  template: 'loginView'
	});

  this.route('logout', {
		path: '/logout',
    action: function () {
      Meteor.logout()
      Router.go('/');
    }
	});

  this.route('profileEdit', {
		path: '/profile/edit',
	  template: 'profileEditView',
    controller: ProfileEditController
	});

  this.route('conversationsBoard', {
		path: '/conversations',
	  template: 'conversationsBoardView',
    controller: ConversationsBoardController
	});

  this.route('conversation', {
		path: '/conversations/:userId',
	  template: 'conversationView',
    controller: ConversationController
	});

});
