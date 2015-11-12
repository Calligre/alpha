var TWEETING_KEY = 'shareOverlayTweeting';
var FACEBOOK_KEY = 'shareOverlayFacebook';
var IMAGE_KEY = 'shareOverlayAttachedImage';
var TEXT_KEY = 'shareOverlayAttachedText';


Template.shareOverlay.onCreated(function() {
  Session.set(TWEETING_KEY, false);
  Session.set(FACEBOOK_KEY, false);
  Session.set(IMAGE_KEY, null);
  Session.set(TEXT_KEY, false);
});

Template.shareOverlay.helpers({
  avatar: function() {
    return Meteor.user().services.twitter.profile_image_url_https;
  },
  hasFacebook: function() {
    return 'facebook' in Meteor.user().services;
  },
  hasTwitter: function() {
    return 'twitter' in Meteor.user().services;
  },
  facebooking: function() {
    return Session.get(FACEBOOK_KEY);
  },
  tweeting: function() {
    return Session.get(TWEETING_KEY);
  },
  socialing: function() {
    return Session.get(FACEBOOK_KEY) || Session.get(TWEETING_KEY);
  },
  postData: function() {
    return Session.get(IMAGE_KEY) || Session.get(TEXT_KEY);
  },
  postImage: function() {
    return Session.get(IMAGE_KEY);
  }
});

Template.shareOverlay.events({
  'click .js-attach-image': function() {
    MeteorCamera.getPicture({width: 280}, function(error, data) {
      if (error) {
        alert(error.reason);
      } else {
        Session.set(IMAGE_KEY, data);
      }
    });
  },

  'click .js-attach-text': function() {
    Session.set(TEXT_KEY, true);
  },

  'click .js-unattach': function() {
    Session.set(IMAGE_KEY, null);
    Session.set(TEXT_KEY, false);
  },

  'change [name=facebooking]': function(event) {
    Session.set(FACEBOOK_KEY, $(event.target).is(':checked'));
  },

  'change [name=tweeting]': function(event) {
    Session.set(TWEETING_KEY, $(event.target).is(':checked'));
  },

  'submit': function(event, template) {
    var self = this;

    event.preventDefault();

    var text = $(event.target).find('[name=text]').val();
    var tweet = Session.get(TWEETING_KEY);
    var fbpost = Session.get(FACEBOOK_KEY);

    var blob = null;
    if (fbpost && Session.get(IMAGE_KEY)) {
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs
      var byteString = window.atob(Session.get(IMAGE_KEY).replace(/^data.*base64,/, ''));
      // write the bytes of the string to an ArrayBuffer
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }

      // write the ArrayBuffer to a blob
      blob = new Blob([ia], { type: 'image/jpeg' });
    }

    Meteor.call('createActivity',
                { text: text, image: Session.get(IMAGE_KEY) },
                tweet,
                fbpost,
                blob,
                function(error, result) {
      if (error) {
        alert(error.reason);
      } else {
        Template.appBody.addNotification({
          action: 'View',
          title: 'Your post was shared.',
          callback: function() {
            Router.go('activityList');
          }
        });
      }
    });

    Overlay.close();
  }
});
