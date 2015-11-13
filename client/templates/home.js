Template.login.events({
  'click .sign-in-text-facebook': function(event) {
    Meteor.loginWithFacebook({}, function(err) {
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
    });
  },
  'click .sign-in-text-twitter': function(event) {
    Meteor.loginWithTwitter();
  },
  'click .sign-in-text-linkedin': function(event) {
    Meteor.loginWithLinkedin();
  }
});
