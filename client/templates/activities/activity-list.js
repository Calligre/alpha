Template.activityList.events({
  'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  }
});

Template.activityList.helpers({
  activities: function() {
    return Activities.find({}, {sort: {date: -1}});
  },
  isReady: function() {
    return Router.current().activitySubscription.ready();
  }
});
