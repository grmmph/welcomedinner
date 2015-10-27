/**
 * @class Search Magnaer
 * @usage SearchManager.getResults
 */

SearchManager = {
  /**
   * @return user {Object}
   */
  getResults: function () {
    var userType = UsersManager.getUserType();
    if (!userType) {
      return;
    }
    if (userType === "guest") {
      return UsersManager.getUsersByType("host");
    } else if (userType === "host") {
      return UsersManager.getUsersByType("guest");
    }
  }
}
