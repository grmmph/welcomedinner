Template.conversationView.events({
  'submit .new-message-form': function (evt) {
    evt.preventDefault();
    console.log(evt)
    MessagesManager.sendMessage(this.partner._id, $("[name=message]").val());
  }
});
