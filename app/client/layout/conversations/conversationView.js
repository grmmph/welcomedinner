Session.setDefault('MessagesView.isSendDisabled', true);
Template.conversationView.helpers({
  isDisabled: function () {
    return Session.get('MessagesView.isSendDisabled');
  }
});

Template.conversationView.events({
  'submit .new-message-form': function (evt) {
    evt.preventDefault();
    MessagesManager.sendMessage(this.partner._id, $("[name=message]").val());
  },
  'keyup textarea': function (evt) {
    if (!$(evt.target).val()) {
      return Session.set('MessagesView.isSendDisabled', true);
    } else {
      return Session.set('MessagesView.isSendDisabled', false);
    }
  }
});
