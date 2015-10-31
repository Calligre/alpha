Meteor.publish('latestActivity', function () {
  return Activities.latest();
});

Meteor.publish('feed', function() {
  return Activities.find({}, {sort: {date: -1}, limit: 10});
});

Meteor.publish('events', function() {
  return Events.find({}, {sort: {date: -1}, limit: 10});
});

// Clarisse's original specific publishing
/*Meteor.publish('userData', function() {
  return Meteor.users.find({}, {
    fields: {
      score: 1,
      'profile.name': 1,
      'services.twitter.profile_image_url_https': 1,
      'services.twitter.screenName': 1,
      'services.linkedin.id' : 1,
      'services.facebook.id' : 1
    }
  });*/

Meteor.publish('user', function() {
  return Meteor.users.find({}, {sort: {_id: -1}});
});
