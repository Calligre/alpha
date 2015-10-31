var FEATURED_COUNT = 4;

Template.home.helpers({
  // selects FEATURED_COUNT number of recipes at random
  featuredRecipes: function() {
    var recipes = _.values(RecipesData);
    var selection = [];

    for (var i = 0;i < FEATURED_COUNT;i++)
      selection.push(recipes.splice(_.random(recipes.length - 1), 1)[0]);

    return selection;
  },

  activities: function() {
    return Activities.latest();
  },

  latestNews: function() {
    return News.latest();
  }
});

if (Meteor.isClient) {
  Template.linkTemplate.events({
    'click .link-twitter': function () {
      Meteor.linkWithTwitter();
    },
    'click .link-facebook': function () {
      Meteor.linkWithFacebook();
    },
    'click .link-linkedin': function () {
      Meteor.linkWithLinkedIn();
    }
  });
}
