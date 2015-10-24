Template.messageView.helpers({
  messageClass: function () {
    if (this.sender === Meteor.userId()) {
      return "message-you";
    }
    return "message-him";
  },
  isYouSender: function () {
    if (this.sender === Meteor.userId()) {
      return true;
    }
  },
  senderPrettyName: function () {
    if (this.sender === Meteor.userId()) {
      return "You";
    }
    return UsersManager.getUserById(this.sender).profile.firstname;
  }
});
