Template.activityList.helpers({
  activities: function() {
    return Activities.find({}, {sort: {date: -1}});
  },
  isReady: function() {
    return Router.current().activitySubscription.ready();
  }
})
