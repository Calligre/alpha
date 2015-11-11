Template.profileList.helpers({
  isReady: function() {
    return Router.current().userSubscription.ready();
  },
  profiles: function() {
    return Meteor.users.find({}, {sort: {name: -1}});
  }
});
