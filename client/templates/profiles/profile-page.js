Template.profilePage.helpers({
  avatar: function() {
    var user = Meteor.users.findOne(Router.current().options.params.id);
    if (!user) {
      console.error("Profile not found! " + Router.current().options.params.id);
    }

    if ('twitter' in user.services) {
      return user.services.twitter.profile_image_url_https;
    } else if ('facebook' in user.services) {
      return user.services.facebook.image_url;
    } else {
      return 'http://publications.uew.edu.gh/2015/sites/default/files/default_profile_pic.jpg';
    }
  },
  data: function() {
    var user = Meteor.users.findOne(Router.current().options.params.id);
    if (!user) {
      console.error("Profile not found! " + Router.current().options.params.id);
    }

    return user;
  },
  hasFacebook: function() {
    var user = Meteor.users.findOne(Router.current().options.params.id);
    if (!user) {
      console.error("Profile not found! " + Router.current().options.params.id);
    }

    return 'facebook' in user.services;
  },
  hasLinkedin: function() {
    var user = Meteor.users.findOne(Router.current().options.params.id);
    if (!user) {
      console.error("Profile not found! " + Router.current().options.params.id);
    }

    return 'linkedin' in user.services;
  },
  hasTwitter: function() {
    var user = Meteor.users.findOne(Router.current().options.params.id);
    if (!user) {
      console.error("Profile not found! " + Router.current().options.params.id);
    }

    return 'twitter' in user.services;
  },
  isCurrentUser: function() {
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
  'blur #school.editable': function(e) {
    var user = Meteor.users.findOne(Meteor.userId());
    var schoolText = $("#school").text();
    if (user.school != schoolText) {
      $(e.target).text('');
      Meteor.users.update({_id: Meteor.userId()}, {$set: {school: schoolText}});
    }
  },
  'blur #year.editable': function(e) {
    var user = Meteor.users.findOne(Meteor.userId());
    var yearText = $("#year").text();
    if (user.year != yearText) {
      $(e.target).text('');
      Meteor.users.update({_id: Meteor.userId()}, {$set: {year: yearText}});
    }
  },
  'blur #program.editable': function(e) {
    var user = Meteor.users.findOne(Meteor.userId());
    var programText = $("#program").text();
    if (user.program != programText) {
      $(e.target).text('');
      Meteor.users.update({_id: Meteor.userId()}, {$set: {program: programText}});
    }
  },
  'blur #about.editable': function(e) {
    var user = Meteor.users.findOne(Meteor.userId());
    var aboutText = $("#about").text();
    if (user.about != aboutText) {
      $(e.target).text('');
      Meteor.users.update({_id: Meteor.userId()}, {$set: {about: aboutText}});
    }
  }
});
