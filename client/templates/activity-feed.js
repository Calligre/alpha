Template.feed.helpers({
  activities: function() {
    return Activities.find({}, {sort: {date: -1}});
  },
  isReady: function() {
    return Router.current().feedSubscription.ready();
  }
})
