var feedSubscription;
var eventsSubscription;
var userSubscription;

// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
  feedSubscription = Meteor.subscribe('feed');
  eventsSubscription = Meteor.subscribe('events');
  userSubscription = Meteor.subscribe('user');
}

Router.configure({
  // notFoundTemplate: 'notFound',
  layoutTemplate: 'appBody'
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

EventsController = RouteController.extend({
  onBeforeAction: function () {
    this.eventsSubscription = eventsSubscription;
  }
});

ProfileController = RouteController.extend({
  onBeforeAction: function () {
    this.userSubscription = userSubscription;
  }
});


Router.route('home', {
  path: '/'
});

Router.route('feed');

Router.route('events');

Router.route('profiles');

Router.route('event', {
  path: '/events/:name'
});

Router.route('profile', {
  path: '/profiles/:id'
});
