var feedSubscription;

// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('bookmarkCounts');
  feedSubscription = Meteor.subscribe('feed');
}

Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
  // Keep showing the launch screen on mobile devices until we have loaded
  // the app's data
  dataReadyHold = LaunchScreen.hold();
}

HomeController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('latestActivity', function () {
      dataReadyHold.release();
    });
  }
});

FeedController = RouteController.extend({
  onBeforeAction: function () {
    this.feedSubscription = feedSubscription;
  }
});

RecipesController = RouteController.extend({
  data: function () {
    return _.values(RecipesData);
  }
});

BookmarksController = RouteController.extend({
  onBeforeAction: function () {
    if (Meteor.user()) {
      Meteor.subscribe('bookmarks');
    } else {
      Overlay.open('authOverlay');
    }
  },
  data: function () {
    if (Meteor.user()) {
      return _.values(_.pick(RecipesData, Meteor.user().bookmarkedRecipeNames));
    }
  }
});

RecipeController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('recipe', this.params.name);
  },
  data: function () {
    return RecipesData[this.params.name];
  }
});

Router.route('home', {
  path: '/'
});

Router.route('feed');

Router.route('events');

Router.route('people');

Router.route('profiles');

Router.route('event', {
  path: '/events/:name'
});

Router.route('profile', {
  path: '/profiles/:name'
});


Router.onBeforeAction('dataNotFound', {
  only: 'recipe'
});
