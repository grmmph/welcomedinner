/**
 * @type view
 * profileEditView
 */
var autocomplete;
Template.profileEditView.helpers({
  autocomplete: function () {
      console.log(Session.get('MapsManager.isLoaded'))
      if (Session.get('MapsManager.isLoaded')) {
          console.log(Session.get('MapsManager.isLoaded'))
          autocomplete = MapsManager.setAutocompleteElement();
          return true;
      }
      return false;
  }
});

Template.profileEditView.rendered = function () {

};
