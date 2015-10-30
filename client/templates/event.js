var TAB_KEY = 'eventShowTab';

Template.event.onCreated(function() {
  if (Router.current().params.activityId)
    Template.event.setTab('feed');
  else
    Template.event.setTab('event');
});

Template.event.onRendered(function () {
  this.$('.event').touchwipe({
    wipeDown: function () {
      if (Session.equals(TAB_KEY, 'event'))
        Template.event.setTab('make')
    },
    preventDefaultEvents: false
  });
  this.$('.attribution-event').touchwipe({
    wipeUp: function () {
      if (! Session.equals(TAB_KEY, 'event'))
        Template.event.setTab('event')
    },
    preventDefaultEvents: false
  });
});

// CSS transitions can't tell the difference between e.g. reaching
//   the "make" tab from the expanded state or the "feed" tab
//   so we need to help the transition out by attaching another
//   class that indicates if the feed tab should slide out of the
//   way smoothly, right away, or after the transition is over
Template.event.setTab = function(tab) {
  var lastTab = Session.get(TAB_KEY);
  Session.set(TAB_KEY, tab);

  var fromEvent = (lastTab === 'event') && (tab !== 'event');
  $('.feed-scrollable').toggleClass('instant', fromEvent);

  var toEvent = (lastTab !== 'event') && (tab === 'event');
  $('.feed-scrollable').toggleClass('delayed', toEvent);
}

Template.event.helpers({
  isActiveTab: function(name) {
    return Session.equals(TAB_KEY, name);
  },
  activeTabClass: function() {
    return Session.get(TAB_KEY);
  },
  bookmarked: function() {
    return Meteor.user() && _.include(Meteor.user().bookmarkedEventNames, this.name);
  },
  activities: function() {
    return Activities.find({eventName: this.name}, {sort: {date: -1}});
  }
});

Template.event.events({
  'click .js-show-event': function(event) {
    event.stopPropagation();
    Template.event.setTab('make')
  },
  'click .js-show-feed': function(event) {
    event.stopPropagation();
    Template.event.setTab('feed')
  },
  'click .js-uncollapse': function() {
    Template.event.setTab('event')
  },
  'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  }
});
