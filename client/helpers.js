Handlebars.registerHelper('activePage', function() {
  // includes Spacebars.kw but that's OK because the route name ain't that.
  var routeNames = arguments;

  return _.include(routeNames, Router.current().route.name) && 'active';
});

Handlebars.registerHelper('place', function() {
    var idx;
    Meteor.users.find({}, {sort: {points: 1}}).forEach(function(item, ind) {
      if (item._id == Meteor.userId()) {
        idx = ind;
        return true;
      };
    });

    return idx + 1;
});
