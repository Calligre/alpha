var activitySubscription;
var eventsSubscription;
var userSubscription;

// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
  activitySubscription = Meteor.subscribe('feed');
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

ActivityListController = RouteController.extend({
  onBeforeAction: function () {
    this.activitySubscription = activitySubscription;
  }
});

EventsController = RouteController.extend({
  onBeforeAction: function () {
    this.eventsSubscription = eventsSubscription;
  }
});

ProfileListController = RouteController.extend({
  onBeforeAction: function () {
    this.userSubscription = userSubscription;
  }
});


Router.route('home', {
  path: '/'
});

Router.route('activityList');

Router.route('eventList', {
  path: '/events'
});

Router.route('profileList', {
  path: '/profiles'
});

Router.route('event', {
  path: '/events/:name'
});

Router.route('profile', {
  path: '/profiles/:id'
});
