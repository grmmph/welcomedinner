ConversationsBoardController = BaseController.extend({
  waitOn: function () {
    return [Meteor.subscribe('messages', Meteor.userId())];
  },
  data: function () {
    return {
      conversations: MessagesManager.getUsersConversations()
    }
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
