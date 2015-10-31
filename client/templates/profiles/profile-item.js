Template.profileItem.helpers({
  path: function () {
    return Router.path('profilePage', this.profile);
  }
});
