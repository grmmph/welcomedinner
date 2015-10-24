ConversationsBoardController = BaseController.extend({
  waitOn: function () {
    return [Meteor.subscribe('messages', Meteor.userId())];
  }
});

ConversationController = ConversationsBoardController.extend({
  data: function () {
    return {
      messages: Messages.find({$or: [{receiver: this.pramas.userId}, {sender: this.pramas.userId}] }).fetch()
    }
  }
});
