Template.eventItem.helpers({
  path: function () {
    return Router.path('eventPage', this.event);
  },
  startDate: function() {
    return $.format.date(this.startDate.getTime(), "ddd h:mmp");
  },
  endDate: function() {
    return $.format.date(this.endDate.getTime(), "ddd h:mmp");
  }
});
