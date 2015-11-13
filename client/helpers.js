Handlebars.registerHelper('activePage', function() {
  // includes Spacebars.kw but that's OK because the route name ain't that.
  var routeNames = arguments;

  return _.include(routeNames, Router.current().route.name) && 'active';
});

Handlebars.registerHelper('rank', function() {
  var userRank = 0;
  Meteor.users.find({}, {sort: {points: -1}}).forEach(function(item, idx) {
    if (item._id == Router.current().options.params.id) {
      userRank = idx + 1
    }
  });

  return userRank;
});
