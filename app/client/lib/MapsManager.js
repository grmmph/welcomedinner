/**
 * @class MapsManager
 */

MapsManager = {
  isLoaded: false,

  /**
   * Loading goole maps if needed
   */
   load: _.once(function(callback) {
     var script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC7hAC8y8Qyb-2ZNPXPjXoee7kju-ZZIvo&callback=MapsManager.onLoadCallback&libraries=places';
     Session.set('MapsManager.isLoaded', false);

     document.body.appendChild(script);
   }),

   onLoadCallback: function () {
     console.log(google)
     Session.set('MapsManager.isLoaded', true);
   },

  /**
   * Autocomplete Class
   * @param elId {String}
   * @return autocomplete {Object}
   */
  setAutocompleteElement: function (elId) {
    console.log('hahah')
    return new google.maps.places.Autocomplete(
    (document.getElementById(elId)),{types: ['geocode'] }
  );
  }
}
