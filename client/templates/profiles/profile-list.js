Template.profileList.helpers({
  isReady: function() {
    return Router.current().userSubscription.ready();
  },
  profiles: function() {
    if (Session.get('sort_by_points')) {
      return Meteor.users.find({}, {sort: {points: -1}});
    } else {
      return Meteor.users.find({}, {sort: {name: -1}});
    }
  }
});

Template.profileList.events({
  'click .js-points': function() {
    Session.set('sort_by_points', !Session.get('sort_by_points'));
  }
});

Template.profileList.created = function() {
  Session.set('sort_by_points', false);
}
