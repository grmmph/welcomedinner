Template.conversationView.events({
  'submit .new-message-form': function (evt) {
    evt.preventDefault();
    MessagesManager.sendMessage(this.partner._id, $("[name=message]").val());
    $("[name=message]").val('')
  }
});
