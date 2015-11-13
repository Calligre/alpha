Template.login.events({
  'click .sign-in-text-facebook': function(event) {
    Meteor.loginWithFacebook({}, function(err) {
      if (err) {
        alert(err);
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
  }
});

Template.login.helpers({
  services: function() {
    return [{name: 'twitter'}, {name: 'linkedin'}];
  }
})
