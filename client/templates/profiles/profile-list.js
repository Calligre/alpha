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

Template.profileList.created = function() {
  Session.set('sort_by_points', false);
}

Template.profileList.events({
  'click #names': function() {
    var names = $('#names');
    var points = $('#points');
    if (!names.hasClass('selected')) {
      names.addClass('selected');
      points.removeClass('selected');
      Session.set('sort_by_points', false);
    }
  },
  'click #points': function() {
    var points = $('#points');
    var names = $('#names');
    if (!points.hasClass('selected')) {
      points.addClass('selected');
      names.removeClass('selected');
      Session.set('sort_by_points', true);
    }
  },
});
