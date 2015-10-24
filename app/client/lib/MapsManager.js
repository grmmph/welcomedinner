/**
 * @class MapsManager
 * @usage MapsManager.load(callback)
 */

MapsManager = {
  isLoaded: false,
   /**
    * @private
    * Appending google maps script to DOM
    * @param
    */
   appendScript: _.once(function(callback) {
     this.onLoadCallback = callback || this.onLoadCallback;
     var script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC7hAC8y8Qyb-2ZNPXPjXoee7kju-ZZIvo&callback=MapsManager.onLoadCallback&libraries=places';
     Session.set('MapsManager.isLoaded', false);

     document.body.appendChild(script);
     this.isLoaded = true;
   }),

   /**
    * @private
    * Dummy callback incase the no one provided callback
    */
   onLoadCallback: function () {
     return true;
   },

   //-- PUBLIC FUNCTIONS --//
   /**
    * @public
    * Loading goole maps if needed
    */
    load: function (callback) {
      if (!this.isLoaded) {
        this.appendScript(callback);
        return;
      }
      callback();
    },

    /**
     * @public
     * Set an autocomplete element
     * @param elId {String}
     * @return autocomplete {Object} Google places autocomplete object
     */
    setAutocompleteElement: function (elId) {
        return new google.maps.places.Autocomplete(
        (document.getElementById(elId)),{types: ['geocode'] }
      );
    },
}
