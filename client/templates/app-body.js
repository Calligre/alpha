var ANIMATION_DURATION = 300;
var NOTIFICATION_TIMEOUT = 3000;
var MENU_KEY = 'menuOpen';
var IGNORE_CONNECTION_ISSUE_KEY = 'ignoreConnectionIssue';
var CONNECTION_ISSUE_TIMEOUT = 5000;

Session.setDefault(IGNORE_CONNECTION_ISSUE_KEY, true);
Session.setDefault(MENU_KEY, false);

var nextInitiator = null, initiator = null;
Deps.autorun(function() {
  Router.current();

  initiator = nextInitiator;
  nextInitiator = null;
});

var notifications = new Mongo.Collection(null);

Template.appBody.addNotification = function(notification) {
  var id = notifications.insert(notification);

  Meteor.setTimeout(function() {
    notifications.remove(id);
  }, NOTIFICATION_TIMEOUT);
}

Meteor.startup(function () {
  // set up a swipe left / right handler
  $(document.body).touchwipe({
    wipeLeft: function() {
      Session.set(MENU_KEY, false);
    },
    wipeRight: function() {
      Session.set(MENU_KEY, true);
    },
    preventDefaultEvents: false
  });

  setTimeout(function() {
    dataReadyHold.release();

    Session.set(IGNORE_CONNECTION_ISSUE_KEY, false);
  }, CONNECTION_ISSUE_TIMEOUT);
});

Template.appBody.onRendered(function() {
  this.find("#content-container")._uihooks = {
    insertElement: function(node, next) {
      if (initiator === 'menu') {
        return $(node).insertBefore(next);
      }

      var start = (initiator === 'back') ? '-100%' : '100%';

      $.Velocity.hook(node, 'translateX', start);
      $(node).insertBefore(next)
             .velocity({translateX: [0, start]}, {
        duration: ANIMATION_DURATION,
        easing: 'ease-in-out',
        queue: false
      });
    },
    removeElement: function(node) {
      if (initiator === 'menu') {
        return $(node).remove();
      }

      var end = (initiator === 'back') ? '100%' : '-100%';

      $(node).velocity({translateX: end}, {
        duration: ANIMATION_DURATION,
        easing: 'ease-in-out',
        queue: false,
        complete: function() {
          $(node).remove();
        }
      });
    }
  };

  this.find(".notifications")._uihooks = {
    insertElement: function(node, next) {
      $(node).insertBefore(next)
             .velocity("slideDown", {
        duration: ANIMATION_DURATION,
        easing: [0.175, 0.885, 0.335, 1.05]
      });
    },
    removeElement: function(node) {
      $(node).velocity("fadeOut", {
        duration: ANIMATION_DURATION,
        complete: function() {
          $(node).remove();
        }
      });
    }
  };
});

Template.appBody.helpers({
  connected: function() {
    return Session.get(IGNORE_CONNECTION_ISSUE_KEY) || Meteor.status().connected;
  },
  currentUserId: function(){
    return Meteor.userId();
  },
  menuOpen: function() {
    return Session.get(MENU_KEY) && 'menu-open';
  },
  notifications: function() {
    return notifications.find();
  },
  overlayOpen: function() {
    return Overlay.isOpen() ? 'overlay-open' : '';
  }
});

Template.appBody.events({
  'click .js-back': function(event) {
    nextInitiator = 'back';

    history.back();
    event.stopImmediatePropagation();
    event.preventDefault();
  },
  'click .js-menu': function(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    Session.set(MENU_KEY, !Session.get(MENU_KEY));
  },
  'click a.js-open': function(event) {
    // On Cordova, open links in the system browser rather than In-App
    if (Meteor.isCordova) {
      event.preventDefault();
      window.open(event.target.href, '_system');
    }
  },
  'click .content-overlay': function(event) {
    Session.set(MENU_KEY, false);
    event.preventDefault();
  },
  'click #menu a': function(event) {
    nextInitiator = 'menu'
    Session.set(MENU_KEY, false);
  },
  'click .js-notification-action': function() {
    if (_.isFunction(this.callback)) {
      this.callback();
      notifications.remove(this._id);
    }
  }
});
