var activitySubscription;
var eventsSubscription;
var userSubscription;

dataReadyHold = null;

if (Meteor.isClient) {
  activitySubscription = Meteor.subscribe('feed');
  eventsSubscription = Meteor.subscribe('events');
  userSubscription = Meteor.subscribe('user');
}

Router.configure({
  layoutTemplate: 'appBody'
});

if (Meteor.isClient) {
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

//redirect if not logged in
Router.onBeforeAction(function() {
    if (!Meteor.userId()) {
      this.redirect('/');
    }
}, {except: ['home']});
