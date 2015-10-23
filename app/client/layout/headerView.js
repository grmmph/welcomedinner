Template.headerView.helpers({
  headerClass: function () {
    if (Router.current().route.getName() === "mainLandingView") {
      return "absolute-header";
    }
  }
});
