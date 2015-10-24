MessagesController = BaseController.extend({
  waitOn: function () {
    return [Meteor.subscribe('messages', Meteor.userId())];
  },
  data: function () {
    return Meteor.Messages();
  }
});
