Template.conversationsBoardView.rendered = function () {
  console.log(this)
}
Template.conversationsBoardItemView.events({
  'click': function () {
    Router.go('conversation', {partnerId: this.partner._id})
  }
});
