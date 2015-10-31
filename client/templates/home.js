Template.home.helpers({
  isLoggedIn: function() {
    return Meteor.userId() !== null;
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
