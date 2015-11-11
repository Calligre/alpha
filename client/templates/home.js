Template.home.helpers({
  isLoggedIn: function() {
    return Meteor.userId() !== null;
  }
});

Template.login.service = function()
{
    return [{name: 'facebook'}, {name:'twitter'}, {name:'linkedin'}];
};

Template.login.events({
  'click #logout-button': function() {
    Meteor.logout();
  }
});
