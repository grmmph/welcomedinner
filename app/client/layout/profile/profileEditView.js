/**
 * @type view
 * profileEditView
 */
var autocomplete;
Template.profileEditView.helpers({
  autocomplete: function () {
    console.log(this)
    return true;
  }
});

Template.profileEditView.rendered = function () {
    var autocomplete;
    MapsManager.load(function () {
      autocomplete = MapsManager.setAutocompleteElement('profile-address');
    });
    return true;
};

Template.profileEditView.events({
  'click .save-btn': function (evt) {
    evt.preventDefault()
    _.each($('input, textarea'), function (input) {
      UsersManager.setToProfile($(input).attr('name'), $(input).val());
      Router.go('/')
    })
  },

  'click .user-type-btn': function (evt) {
      UsersManager.setToProfile('type', $(evt.target).attr('data-user-type'));
  }
});
