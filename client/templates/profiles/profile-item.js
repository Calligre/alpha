Template.profileItem.helpers({
  avatar: function() {
    if ('twitter' in this.services) {
      return this.services.twitter.profile_image_url_https.replace("normal", "bigger");
    } else if ('facebook' in this.services) {
      return this.services.facebook.image_url;
    } else {
      return 'http://publications.uew.edu.gh/2015/sites/default/files/default_profile_pic.jpg';
    }
  },
  path: function () {
    return Router.path('profilePage', this.profile);
  }
});
