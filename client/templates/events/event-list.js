Template.eventList.events({
  'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  }
});

Template.eventList.helpers({
  agenda_events: function() {
    return Events.find({attendees: Meteor.userId()}, {sort: {date: -1}});
  },
  events: function() {
    return Events.find({}, {sort: {date: -1}});
  },
  isReady: function() {
    return Router.current().eventsSubscription.ready();
  }
});
