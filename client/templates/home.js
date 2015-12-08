Template.home.onRendered(function() {
  var self = this;

});

Template.home.helpers({
  isReady: function() {
    return Accounts.loginServicesConfigured();
  },
  logo: 'img/app/logo.png',
  conferenceShortName: 'CDE 2015',
  conferenceName: 'Conference on Diversity in Engineering 2015',
  facebook: 'https://www.facebook.com/conferenceondiversityinengineering',
  twitter: 'https://twitter.com/diversityineng',
  youtube: 'https://www.youtube.com/channel/UCy80Ydr1QB2dOA1D9Us2_7Q',
  generalInformation: "Welcome to the Conference on Diversity in Engineering!\nThe University of Waterloo is proud to host the inaugural Conference on Diversity in Engineering this November 2015. As new initiative of the Canadian Federation of Engineering Students, CDE aims to equip tomorrow’s leaders with the knowledge and inspiration to positively impact the Canadian engineering industry. 150 of the brightest engineering students from across the country will join together to discuss and learn about the challenges and opportunities that are faced in building a representative engineering community."
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
