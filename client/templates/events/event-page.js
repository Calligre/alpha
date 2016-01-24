Template.eventPage.helpers({
  attending: function() {
    var match = Events.findOne(Router.current().options.params.id);
    if (!match) {
        console.error("Event not found! " + Router.current().options.params.id);
    }

    return match.attendees.indexOf(Meteor.userId()) !== -1;
  },
  data: function() {
    var match = Events.findOne(Router.current().options.params.id);
    if (!match) {
        console.error("Event not found! " + Router.current().options.params.id);
    }

    return match;
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
  'click .js-remove-from-agenda': function(event) {
    Events.update({_id: Router.current().options.params.id}, {$pull: {'attendees': Meteor.userId()}});
  },
});
