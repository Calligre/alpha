Template.eventItem.helpers({
  path: function () {
    return Router.path('eventPage', this.event);
  },
  date: function() {
    return $.format.date(this.startDate.getTime(), "ddd");
  },

  startDate: function(){
    return $.format.date(this.startDate.getTime(), "h:mmp");
  },

  endDate: function(){
    return $.format.date(this.endDate.getTime(), "h:mmp");
  }
});
