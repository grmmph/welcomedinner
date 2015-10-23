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
  'keyup input': function (evt) {
    console.log($(evt.target).val())
    UsersManager.setToProfile($(evt.target).attr('name'), $(evt.target).val());
  }
});
