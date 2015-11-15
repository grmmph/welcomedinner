/**
 * @type view
 * profileEditView
 */
Template.profileEditView.helpers({
  formData: function () {
    return {
      uid: Meteor.userId()
    }
  }
});
var autocomplete;
Template.profileEditView.rendered = function () {
    MapsManager.load(function () {
      autocomplete = MapsManager.setAutocompleteElement('profile-location');
    });
    return true;
};

Template.profileEditView.events({
  'click .save-btn': function (evt) {
    evt.preventDefault()
    _.each($('input, textarea'), function (input) {
      UsersManager.setToProfile($(input).attr('name'), $(input).val());
    });
    console.log(autocomplete)
    if (autocomplete.getPlace()) {
      var location = {
          placeObj: autocomplete.getPlace(),
          type: "Point",
          coordinates: [
            autocomplete.getPlace().geometry.location.lat(),
            autocomplete.getPlace().geometry.location.lng()
          ]
      }
      UsersManager.setToProfile('location', location);
    }
    Router.go('/');
  },

  'click .user-type-btn': function (evt) {
      UsersManager.setToProfile('type', $(evt.target).attr('data-user-type'));
  },
  'change .myFileInput': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            console.log(fileObj)
            var imagesURL = {
              "profile.image": "/cfs/files/images/" + fileObj._id
            };
            Meteor.users.update(userId, {$set: imagesURL});
          }
        });
     });
   }
});
