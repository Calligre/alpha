Template.profileItem.helpers({
  avatar: function() {
    if ('twitter' in Meteor.user().services) {
      return Meteor.user().services.twitter.profile_image_url_https;
    } else if ('facebook' in Meteor.user().services) {
      return Meteor.user().services.facebook.image_url;
    } else {
      return 'http://publications.uew.edu.gh/2015/sites/default/files/default_profile_pic.jpg';
    }
  },
  path: function () {
    return Router.path('profilePage', this.profile);
  }
});
