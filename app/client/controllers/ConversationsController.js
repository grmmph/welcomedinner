ConversationsBoardController = BaseController.extend({
  waitOn: function () {
    return [Meteor.subscribe('messages', Meteor.userId())];
  }
});

ConversationController = ConversationsBoardController.extend({
  data: function () {
    return {
      partner: UsersManager.getUserById(this.params.userId),
      messages: Messages.find({$or: [{receiver: this.params.userId}, {sender: this.params.userId}] }).fetch()
    }
  }
});
