/**
 * @type view
 * profileEditView
 */
var autocomplete;
Template.profileEditView.helpers({
  autocomplete: function () {
      return true;
  }
});

Template.profileEditView.rendered = function () {
    var autocomplete;
    MapsManager.load(function () {
      console.log('hahah')
      autocomplete = MapsManager.setAutocompleteElement('autocomplete');
    });
    return true;
};
