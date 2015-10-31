Template.home.helpers({
  isLoggedIn: function() {
    return Meteor.userId() !== null;
  }
});

Template.home.events({
  'click #login-twitter': function () {
    Meteor.loginWithTwitter({loginStyle: 'redirect'});
  },
  'click #logout-button': function() {
    Meteor.logout();
  }
})
