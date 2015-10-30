Template.eventItem.helpers({
  path: function () {
    return Router.path('event', this.event);
  },
  highlightedClass: function () {
    if (this.size === 'large')
      return 'highlighted';
  }
});
