var convertToEST = function(date) {
  var newHours = date.getHours() + (5 - (date.getTimezoneOffset() / 60));
  date.setHours(newHours);

  return date;
}

Meteor.startup(function() {
  Activities._ensureIndex({text: 1, userName: 1}, {unique: true, dropDups: true});

  Events._ensureIndex({title: 1, speaker: 1, startDate: 1, endDate: 1}, {unique: true, dropDups: true});
  try {
    Events.insert({
      title: "Dinner & Opening Ceremonies",
      description: "Junior Design, Senior Design, Consulting, Programming",
      location: "Fed Hall",
      convertToEST(new Date(2016, 01, 29, 17, 00, 00)),
      convertToEST(new Date(2016, 01, 29, 18, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Dinner & Opening Ceremonies",
      description: "Innovative Design, Engineering Communications, Debates",
      location: "Fed Hall",
      convertToEST(new Date(2016, 01, 29, 17, 30, 00)),
      convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competitor Briefing",
      description: "Junior Design",
      location: "Fed Hall - Meeting Room",
      convertToEST(new Date(2016, 01, 29, 18, 30, 00)),
      convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competitor Briefing",
      description: "Senior Design",
      location: "RCH 307",
      convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competitor Briefing",
      description: "Programming",
      location: "Fed Hall - Multipurpose B",
      convertToEST(new Date(2016, 01, 29, 18, 30, 00)),
      convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competitor Briefing",
      description: "Consulting",
      location: "E5 - 2nd floor lobby",
      convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competitor Briefing",
      description: "Engineering Communications",
      location: "Fed Hall - Meeting Room",
      convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      convertToEST(new Date(2016, 01, 29, 20, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competitor Briefing",
      description: "Debates",
      location: "Fed Hall - Multipurpose A",
      convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      convertToEST(new Date(2016, 01, 29, 20, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competitor Briefing",
      description: "Innovative Design",
      location: "Fed Hall - Multipurpose B",
      convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      convertToEST(new Date(2016, 01, 29, 20, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competition Build",
      description: "Junior Design",
      location: "HQ: RCH 101",
      convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      convertToEST(new Date(2016, 01, 30, 01, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competition Build",
      description: "Senior Design",
      location: "HQ: RCH 307",
      convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      convertToEST(new Date(2016, 01, 30, 01, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competition Build",
      description: "Programming",
      location: "E5 - 2nd floor lobby",
      convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      convertToEST(new Date(2016, 01, 30, 03, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Competition Build",
      description: "Consulting",
      location: "E5 - 2nd floor lobby",
      convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      convertToEST(new Date(2016, 01, 30, 01, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Breakfast",
      description: "",
      location: "E5 - SDC",
      convertToEST(new Date(2016, 01, 30, 08, 00, 00)),
      convertToEST(new Date(2016, 01, 30, 09, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Presentations",
      description: "",
      location: "E5",
      convertToEST(new Date(2016, 01, 30, 09, 00, 00)),
      convertToEST(new Date(2016, 01, 30, 17, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Lunch",
      description: "",
      location: "E5 - SDC",
      convertToEST(new Date(2016, 01, 30, 11, 50, 00)),
      convertToEST(new Date(2016, 01, 30, 13, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Sponsor Marketplace",
      description: "",
      location: "E5 - SDC and 2nd floor lobby",
      convertToEST(new Date(2016, 01, 30, 11, 00, 00)),
      convertToEST(new Date(2016, 01, 30, 15, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Dinner Preparations",
      description: "",
      Delta Waterloo,
      convertToEST(new Date(2016, 01, 30, 17, 30, 00)),
      convertToEST(new Date(2016, 01, 30, 18, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Dinner & Awards Ceremonies",
      description: "",
      location: "Concordia Club",
      convertToEST(new Date(2016, 01, 30, 19, 00, 00)),
      convertToEST(new Date(2016, 01, 30, 21, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Social Event",
      description: "",
      location: "Chainsaw",
      convertToEST(new Date(2016, 01, 30, 22, 30, 00)),
      convertToEST(new Date(2016, 01, 31, 01, 00, 00)),
      attendees: []
    });
  } catch (e) { }
});
