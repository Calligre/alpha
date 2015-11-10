Template.profileList.helpers({
  profiles: function() {
    return Meteor.users.find({}, {sort: {name: -1}});
  },
  isReady: function() {
    return Router.current().userSubscription.ready();
  }
});