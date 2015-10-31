Template.eventItem.helpers({
  path: function () {
    return Router.path('event', this.event);
  }
});
