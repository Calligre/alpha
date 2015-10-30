Meteor.publish('bookmarkCounts', function() {
  return BookmarkCounts.find();
});

Meteor.publish('latestActivity', function () {
  return Activities.latest();
});

Meteor.publish('feed', function() {
  return Activities.find({}, {sort: {date: -1}, limit: 10});
});

Meteor.publish('recipe', function(name) {
  check(name, String);
  return [
    BookmarkCounts.find({recipeName: name}),
    Activities.find({recipeName: name})
  ];
});
