Template.events.helpers({
  events: function() {
    return Events.find({}, {sort: {date: -1}});
  },
  isReady: function() {
    return Router.current().eventsSubscription.ready();
  }
});
