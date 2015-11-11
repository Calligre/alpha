Template.profilePage.helpers({
    data: function() {
        var matches = Meteor.users.find({_id: Router.current().options.params.id}).fetch();
        if (matches.length != 1) {
            console.error("Holy fuck how did you do that?")
        }
        return matches[0];
    },
    isReady: function() {
        return Router.current().userSubscription.ready();
    }
});

Template.linkTemplate.events({
  'click .link-twitter': function() {
    Meteor.linkWithTwitter();
  },
  'click .link-facebook': function() {
    Meteor.linkWithFacebook();
  },
  'click .link-linkedin': function() {
    Meteor.linkWithLinkedIn();
  }
});

Template.login.events({
  'click #logout-button': function() {
    Meteor.logout();
  }
});
