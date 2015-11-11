Template.profilePage.helpers({
  data: function() {
    var matches = Meteor.users.findOne(Router.current().options.params.id);
    if (!matches) {
      console.error("Profile not found! " + Router.current().options.params.id);
    }

    return matches;
  },
  isReady: function() {
    return Router.current().userSubscription.ready();
  },
  hasFacebook: function() {
    return 'facebook' in Meteor.user().services;
  },
  hasLinkedin: function() {
    return 'linkedin' in Meteor.user().services;
  },
  hasTwitter: function() {
    return 'twitter' in Meteor.user().services;
  }
});

Template.profilePage.events({
  'click .link-facebook': function() {
    Meteor.linkWithFacebook();
  },
  'click .link-linkedin': function() {
    Meteor.linkWithLinkedIn();
  },
  'click .link-twitter': function() {
    Meteor.linkWithTwitter();
  },
  'click #logout-button': function() {
    Meteor.logout();

    Router.go('home');
  }
});
