Template.home.helpers({
  isLoggedIn: function() {
    return Meteor.userId() !== null;
  }
});

Template.home.events({
  'click #logout-button': function() {
    Meteor.logout();
  },
  'click #login-twitter': function () {
    Meteor.loginWithTwitter({loginStyle: 'redirect'});
  }
})
