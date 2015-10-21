Meteor.subscribe('people');

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('mainLandingView', {
		path: '/',
	    template: 'mainLandingView'
	});
});
