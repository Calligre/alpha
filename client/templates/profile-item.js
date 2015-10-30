Template.profileItem.helpers({
  path: function () {
    return Router.path('profile', this.profile);
  },
  highlightedClass: function () {
    if (this.size === 'large')
      return 'highlighted';
  }
});
