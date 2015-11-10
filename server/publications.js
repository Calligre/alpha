Meteor.publish('feed', function() {
  return Activities.find({}, {sort: {date: -1}, limit: 10});
});

Meteor.publish('events', function() {
  return Events.find({}, {sort: {date: -1}, limit: 10});
});

Meteor.publish('user', function() {
  return Meteor.users.find({}, {
    fields: {
      'services.resume': 0,
      'services.facebook.accessToken': 0,
      'services.linkedin.accessToken': 0,
      'services.twitter.accessToken': 0,
      'services.twitter.accessTokenSecret': 0
    },
    sort: {name: -1}});
});
