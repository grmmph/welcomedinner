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
      partner: UsersManager.getUserById(this.params.partnerId),
      messages: Messages.find({$or: [{receiver: this.params.partnerId}, {sender: this.params.partnerId}] }, {sort: {createdAt: -1}}).fetch(),
    }
  }
});
