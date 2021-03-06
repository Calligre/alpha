Template.home.helpers({
  isReady: function() {
    return Accounts.loginServicesConfigured();
  }
});

Template.login.events({
  'click .sign-in-text-facebook': function(event) {
    Meteor.loginWithFacebook({}, function(err) {
      if (err) {
        alert('Error logging in: please try again.');
      } else {
        var response = HTTP.get(
          'https://graph.facebook.com/v2.5/' + Meteor.user().services.facebook.id + '/picture', {
            params: {
              redirect: false,
              type: 'large'
            }
          }, function(err, data) {
            Meteor.users.update({_id: Meteor.userId()},
                                {$set: {'services.facebook.image_url': data.data.data.url}});
          }
        );
      }
    });
  },
  'click .sign-in-text-twitter': function(event) {
    Meteor.loginWithTwitter({}, function(err) {
      if (err) {
        alert('Error logging in: please try again.');
      }
    });
  },
  'click .sign-in-text-linkedin': function(event) {
    Meteor.loginWithLinkedin({}, function(err) {
      if (err) {
        alert('Error logging in: please try again.');
      }
    });
  }
});
