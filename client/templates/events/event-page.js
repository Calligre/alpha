var TAB_KEY = 'eventShowTab';

Template.eventPage.onCreated(function() {
  Template.eventPage.setTab('event');
});

Template.eventPage.onRendered(function () {
  this.$('.event').touchwipe({
    wipeDown: function() {
      if (Session.equals(TAB_KEY, 'event')) {
        Template.eventPage.setTab('make')
      }
    },
    preventDefaultEvents: false
  });

  this.$('.attribution-event').touchwipe({
    wipeUp: function() {
      if (!Session.equals(TAB_KEY, 'event'))
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

Template.eventPage.toggleTab = function(){
    var tab = (Session.get(TAB_KEY) === 'event') ? 'make' : 'event';
    Template.eventPage.setTab(tab);
}

Template.eventPage.helpers({
  activeTabClass: function() {
    return Session.get(TAB_KEY);
  },
  data: function() {
    var matches = Events.findOne(Router.current().options.params.id);
    if (!matches) {
        console.error("Event not found! " + Router.current().options.params.id);
    }
    return matches;
  },
  getDownloadLink: function() {
    var attendingEvent = Events.findOne(Router.current().options.params.id);
    if (!attendingEvent) {
      console.error("Event not found! " + Router.current().options.params.id);
    }

    var padLessThan10 = function(value) {
      if(value < 10) {
        return "0" + value;
      }
      return value;
    };

    var dateToICSString = function(now) {
      return "" + padLessThan10(now.getUTCFullYear()) + padLessThan10(parseInt(now.getUTCMonth()) + 1) + padLessThan10(now.getUTCDate()) + "T" + padLessThan10(now.getUTCHours()) + padLessThan10(now.getUTCMinutes()) + padLessThan10(now.getUTCSeconds()) + "Z";
    };

    var cal = "BEGIN:VCALENDAR\nVERSION:2.0\n";
    cal += "BEGIN:VEVENT\n";
    cal += "UID:" + attendingEvent['_id'] + "@cde.cfes.ca\n"
    cal += "DTSTAMP:" + dateToICSString(new Date()) + "\n";
    cal += "DTSTART:" + dateToICSString(attendingEvent['startDate']) + "\n";
    cal += "DTEND:" + dateToICSString(attendingEvent['endDate']) + "\n";
    cal += "SUMMARY:" + attendingEvent['title'] + "\n";
    cal += "LOCATION:" + attendingEvent['location'] + "\n";
    cal += "DESCRIPTION:";
    if(attendingEvent['speaker']) {
      cal += "Speaker: " + attendingEvent['speaker'] + "; ";
    }
    if(attendingEvent['description']) {
      cal += attendingEvent['description'];
    }
    cal += "\nEND:VEVENT\nEND:VCALENDAR\n";

    return "data:text/calendar;charset=utf8," + escape(cal);
  },
  isActiveTab: function(name) {
    return Session.equals(TAB_KEY, name);
  },
  startDateDisplay: function(){
    return $.format.date(this.startDate.getTime(), "ddd h:mmp");
  },
  endDateDisplay: function(){
    return $.format.date(this.endDate.getTime(), "ddd h:mmp");
  }
});

Template.eventPage.events({
  'click .js-add-to-agenda': function(event) {
    Events.update({_id: Router.current().options.params.id}, {$addToSet: {'attendees': Meteor.userId()}});
  },
  'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  },
  'click .js-show-attend': function(event) {
    event.stopPropagation();
    Template.eventPage.toggleTab();
  },
  'click .js-uncollapse': function() {
    Template.eventPage.setTab('event')
  }
});
