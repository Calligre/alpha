Template.profilePage.helpers({
  avatar: function() {
    if ('twitter' in Meteor.user().services) {
      return Meteor.user().services.twitter.profile_image_url_https;
    } else if ('facebook' in Meteor.user().services) {
      return Meteor.user().services.facebook.image_url;
    } else {
      return 'http://publications.uew.edu.gh/2015/sites/default/files/default_profile_pic.jpg';
    }
  },
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
