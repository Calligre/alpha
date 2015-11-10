var TAB_KEY = 'eventShowTab';

Template.eventPage.onCreated(function() {
  Template.eventPage.setTab('event');
});

Template.eventPage.onRendered(function () {
  this.$('.event').touchwipe({
    wipeDown: function () {
      if (Session.equals(TAB_KEY, 'event')) {
        Template.eventPage.setTab('make')
      }
    },
    preventDefaultEvents: false
  });

  this.$('.attribution-event').touchwipe({
    wipeUp: function () {
      if (! Session.equals(TAB_KEY, 'event'))
        Template.eventPage.setTab('event')
    },
    preventDefaultEvents: false
  });
});

// CSS transitions can't tell the difference between e.g. reaching
//   the "make" tab from the expanded state or the "feed" tab
//   so we need to help the transition out by attaching another
//   class that indicates if the feed tab should slide out of the
//   way smoothly, right away, or after the transition is over
Template.eventPage.setTab = function(tab) {
  var lastTab = Session.get(TAB_KEY);
  Session.set(TAB_KEY, tab);

  var fromEvent = (lastTab === 'event') && (tab !== 'event');
  $('.feed-scrollable').toggleClass('instant', fromEvent);

  var toEvent = (lastTab !== 'event') && (tab === 'event');
  $('.feed-scrollable').toggleClass('delayed', toEvent);
}

Template.eventPage.helpers({
  isActiveTab: function(name) {
    return Session.equals(TAB_KEY, name);
  },
  activeTabClass: function() {
    return Session.get(TAB_KEY);
  },
  data: function() {
    var matches = Events.find({_id: Router.current().options.params.id}).fetch();
    if (matches.length != 1) {
        console.error("Holy fuck how did you do that?")
    }
    return matches[0];
  },
  activities: function() {
    return [];
    // return Activities.find({eventName: this.name}, {sort: {date: -1}});
  },

  startDate: function(){
    return $.format.date(this.startDate.getTime(), "ddd h:mmp");
  },

  endDate: function(){
    return $.format.date(this.endDate.getTime(), "ddd h:mmp");
  }
});

Template.eventPage.events({
  'click .js-add-to-agenda': function(event) {
    Events.update({_id: Router.current().options.params.id}, {$addToSet: {'attendees': Meteor.userId()}});
  },
  'click .js-show-attend': function(event) {
    event.stopPropagation();
    Template.eventPage.setTab('make')
  },
  'click .js-uncollapse': function() {
    Template.eventPage.setTab('event')
  },
  'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  }
});
