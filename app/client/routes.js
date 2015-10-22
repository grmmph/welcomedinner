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
});
