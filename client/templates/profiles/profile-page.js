Template.profilePage.helpers({
  data: function() {
    var matches = Meteor.users.findOne(Router.current().options.params.id);
    if (!matches) {
      console.error("Profile not found! " + Router.current().options.params.id);
    }

    return matches;
  },
  hasFacebook: function() {
    return 'facebook' in Meteor.user().services;
  },
  hasLinkedin: function() {
    return 'linkedin' in Meteor.user().services;
  },
  hasTwitter: function() {
    return 'twitter' in Meteor.user().services;
  },
  isCurrentUser: function(){
    return Router.current().options.params.id == Meteor.userId();
  },
  isReady: function() {
    return Router.current().userSubscription.ready();
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
  },
  'blur #school.editable': function(){
    Meteor.users.update({_id: Meteor.userId()}, {$set: {school: $("#school").text()}});
  },
  'blur #year.editable': function(){
    Meteor.users.update({_id: Meteor.userId()}, {$set: {year: $("#year").text()}});
  },
  'blur #program.editable': function(){
    Meteor.users.update({_id: Meteor.userId()}, {$set: {program: $("#program").text()}});
  },
  'blur #about.editable': function(){
    Meteor.users.update({_id: Meteor.userId()}, {$set: {about: $("#about").text()}});
  }
});
