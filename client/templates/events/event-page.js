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
  }
});

Template.eventPage.events({
  'click .js-add-to-agenda': function(event) {
    Events.update({_id: Router.current().options.params.id}, {$push: {'attendees': Meteor.userId()}});
    var matches = Events.find({_id: Router.current().options.params.id}).fetch();
    if (matches.length != 1) {
        console.error("Holy fuck how did you do that?")
    }
    var attendingEvent = matches[0];

    var dateToICSString = function(now)
    {
      return "" + now.getUTCFullYear() + (parseInt(now.getUTCMonth()) + 1) + now.getUTCDate() + "T" + now.getUTCHours() + now.getUTCMinutes() + now.getUTCSeconds() + "Z";
    };

    var cal = "BEGIN:VCALENDAR\nPRODID:-//Google Inc//Google Calendar 70.9054//EN\nVERSION:2.0\nCALSCALE:GREGORIAN\nX-WR-TIMEZONE:America/Toronto\n";
    cal += "BEGIN:VEVENT\n";
    cal += "UID:" + attendingEvent['_id'] + "@cde.cfes.ca\n"
    cal += "DTSTAMP:" + dateToICSString(new Date()) + "\n";
    cal += "DTSTART:" + dateToICSString(attendingEvent['startDate']) + "\n";
    cal += "DTEND:" + dateToICSString(attendingEvent['endDate']) + "\n";
    cal += "SUMMARY:" + attendingEvent['title'] + "\n";
    cal += "DESCRIPTION:" + "Speaker: " + attendingEvent['speaker'] + "; " + attendingEvent['description'] + "\n";
    cal += "END:VEVENT\nEND:VCALENDAR\n"

    window.open( "data:text/calendar;charset=utf8," + escape(cal));
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
