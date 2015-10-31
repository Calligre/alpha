Meteor.publish('latestActivity', function () {
  return Activities.latest();
});

Meteor.publish('feed', function() {
  return Activities.find({}, {sort: {date: -1}, limit: 10});
});

Meteor.publish('events', function() {
  return Events.find({}, {sort: {date: -1}, limit: 10});
});

Meteor.publish('user', function() {
  return Meteor.users.find({}, {sort: {_id: -1}});
});
