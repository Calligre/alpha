Template.eventItem.helpers({
  path: function () {
    return Router.path('eventPage', this.event);
  }
});
