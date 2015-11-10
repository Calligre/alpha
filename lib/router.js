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

ProfilePageController = RouteController.extend({
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

Router.route('eventPage', {
  path: '/events/:id'
});

Router.route('profilePage', {
  path: '/profiles/:id'
});
