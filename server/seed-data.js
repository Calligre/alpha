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
      startDate: convertToEST(new Date(2016, 01, 29, 17, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 18, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Dinner & Opening Ceremonies",
      description: "Innovative Design, Engineering Communications, Debates",
      location: "Fed Hall",
      startDate: convertToEST(new Date(2016, 01, 29, 17, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Competitor Briefing",
      description: "Junior Design",
      location: "Fed Hall - Meeting Room",
      startDate: convertToEST(new Date(2016, 01, 29, 18, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Competitor Briefing",
      description: "Senior Design",
      location: "RCH 307",
      startDate: convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Competitor Briefing",
      description: "Programming",
      location: "Fed Hall - Multipurpose B",
      startDate: convertToEST(new Date(2016, 01, 29, 18, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Competitor Briefing",
      description: "Consulting",
      location: "E5 - 2nd floor lobby",
      startDate: convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "EC Competitor Briefing",
      description: "Engineering Communications",
      location: "Fed Hall - Meeting Room",
      startDate: convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 20, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate Competitor Briefing",
      description: "Debates",
      location: "Fed Hall - Multipurpose A",
      startDate: convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 20, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "ID Competitor Briefing",
      description: "Innovative Design",
      location: "Fed Hall - Multipurpose B",
      startDate: convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 20, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Competition Build",
      description: "Junior Design",
      location: "HQ: RCH 101",
      startDate: convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 01, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Competition Build",
      description: "Senior Design",
      location: "HQ: RCH 307",
      startDate: convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 01, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Build",
      description: "Programming",
      location: "E5 - 2nd floor lobby",
      startDate: convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 03, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Build",
      description: "Consulting",
      location: "E5 - 2nd floor lobby",
      startDate: convertToEST(new Date(2016, 01, 29, 19, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 01, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Breakfast",
      description: "",
      location: "E5 - SDC",
      startDate: convertToEST(new Date(2016, 01, 30, 08, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 09, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Presentations",
      description: "",
      location: "E5",
      startDate: convertToEST(new Date(2016, 01, 30, 09, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 17, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Lunch",
      description: "",
      location: "E5 - SDC",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 50, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Sponsor Marketplace",
      description: "",
      location: "E5 - SDC and 2nd floor lobby",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 15, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Dinner Preparations",
      description: "",
      location: "Delta Waterloo",
      startDate: convertToEST(new Date(2016, 01, 30, 17, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 18, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Dinner & Awards Ceremonies",
      description: "",
      location: "Concordia Club",
      startDate: convertToEST(new Date(2016, 01, 30, 19, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 21, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Social Event",
      description: "",
      location: "Chainsaw",
      startDate: convertToEST(new Date(2016, 01, 30, 22, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 31, 01, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 1 from Delta to Feds",
      description: "Goes to Opening Ceremony, for Consulting and Senior Design competitors, judges, and directors",
      location: "Delta Hotel",
      startDate: convertToEST(new Date(2016, 01, 29, 16, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 16, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 2 from Delta to Feds",
      description: "Goes to Opening Ceremony, for Junior Design and Programming competitors, judges, and directors",
      location: "Delta Hotel",
      startDate: convertToEST(new Date(2016, 01, 29, 16, 45, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 17, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 3 from Delta to Feds",
      description: "Goes to Opening Ceremony, for Innovative, Communications, and Debate competitors, judges, and directors",
      location: "Delta Hotel",
      startDate: convertToEST(new Date(2016, 01, 29, 17, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 17, 15, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 1 from Feds to DC",
      description: "Goes to Friday Competitions, for Consulting and Senior Design competitors, judges, and directors",
      location: "Feds Hall",
      startDate: convertToEST(new Date(2016, 01, 29, 18, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 18, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 2 from Feds to DC",
      description: "Goes to Friday Competitions, for Junior Design and Programming competitors, judges, and directors",
      location: "Feds Hall",
      startDate: convertToEST(new Date(2016, 01, 29, 19, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 19, 15, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus from Feds to Delta",
      description: "Goes back to the hotel for the night",
      location: "Feds Hall",
      startDate: convertToEST(new Date(2016, 01, 29, 20, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 29, 20, 15, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus from DC to Delta",
      description: "Goes back to the hotel for the night",
      location: "DC",
      startDate: convertToEST(new Date(2016, 01, 30, 1, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 1, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 1 from Delta to DC",
      description: "For everyone whose presentations are before 10:45am, as well as all judges and competition directors",
      location: "Delta",
      startDate: convertToEST(new Date(2016, 01, 30, 8, 15, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 8, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 2 from Delta to DC",
      description: "For everyone whose presentations are after 10:45am, as well as all other committee members",
      location: "Delta",
      startDate: convertToEST(new Date(2016, 01, 30, 8, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 8, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 1 from DC to Delta",
      description: "For all Junior/Senior Design and Communications competitors, judges, and directors",
      location: "DC",
      startDate: convertToEST(new Date(2016, 01, 30, 16, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 16, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 2 from DC to Delta",
      description: "For all Innovative, Consulting, Programming, and Debate competitors, judges, and directors",
      location: "DC",
      startDate: convertToEST(new Date(2016, 01, 30, 17, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 17, 15, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 1 from Delta to Concordia Club",
      description: "For all Junior/Senior Design and Communications competitors, judges, and directors",
      location: "Delta",
      startDate: convertToEST(new Date(2016, 01, 30, 18, 15, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 18, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 2 from Delta to Concordia Club",
      description: "For all Innovative, Consulting, Programming, and Debate competitors, judges, and directors",
      location: "Delta",
      startDate: convertToEST(new Date(2016, 01, 30, 18, 45, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 19, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 1 from Concordia Club to Delta",
      description: "For all Junior/Senior Design and Communications competitors, judges, and directors",
      location: "Concordia Club",
      startDate: convertToEST(new Date(2016, 01, 30, 21, 20, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 21, 35, 00)),
      attendees: []
    });
    Events.insert({
      title: "Bus 2 from Concordia Club to Delta",
      description: "For all Innovative, Consulting, Programming, and Debate competitors, judges, and directors",
      location: "Concordia Club",
      startDate: convertToEST(new Date(2016, 01, 30, 21, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 21, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Queens",
      description: "",
      location: "E5 5106",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 20, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - RMC",
      description: "",
      location: "E5 5128",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 20, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Laurentian 1",
      description: "",
      location: "E5 5106",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 25, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Carleton 1",
      description: "",
      location: "E5 5128",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 25, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Windsor",
      description: "",
      location: "E5 5106",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 50, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 10, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - UOIT",
      description: "",
      location: "E5 5128",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 50, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 10, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - UofT",
      description: "",
      location: "E5 5106",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 15, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 35, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Waterloo B",
      description: "",
      location: "E5 5128",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 15, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 35, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Ryerson",
      description: "",
      location: "E5 5106",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 15, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Western",
      description: "",
      location: "E5 5128",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 15, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - McMaster",
      description: "",
      location: "E5 5106",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 20, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Laurentian 2",
      description: "",
      location: "E5 5128",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 20, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Conestoga",
      description: "",
      location: "E5 5106",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 45, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - York",
      description: "",
      location: "E5 5128",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 45, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Carleton 2",
      description: "",
      location: "E5 5106",
      startDate: convertToEST(new Date(2016, 01, 30, 12, 50, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 10, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Ottawa",
      description: "",
      location: "E5 5128",
      startDate: convertToEST(new Date(2016, 01, 30, 12, 50, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 10, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Guelph",
      description: "",
      location: "E5 5106",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 15, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 35, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Lakehead",
      description: "",
      location: "E5 5128",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 15, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 35, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Presentation - Waterloo A",
      description: "",
      location: "E5 5106",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "JD Testing - All Teams",
      description: "",
      location: "RCH 101",
      startDate: convertToEST(new Date(2016, 01, 30, 14, 10, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 15, 50, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - UofT",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - Western",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 35, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - UOIT",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 10, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - Waterloo B",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 25, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - Laurentian",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - Ryerson",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 12, 05, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 35, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - Waterloo A",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 05, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 35, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - Guelph",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 10, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - Queen's",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 14, 25, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - Ottawa",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 15, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 15, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - Carleton",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 15, 35, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 16, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "Consulting Presentation - McMaster",
      description: "",
      location: "E5 5047",
      startDate: convertToEST(new Date(2016, 01, 30, 16, 10, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 16, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Presentation - Ryerson",
      description: "",
      location: "E5 6002",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Presentation - McMaster",
      description: "",
      location: "E5 6002",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 35, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Presentation - Ottawa",
      description: "",
      location: "E5 6002",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 20, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 50, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Presentation - UofT",
      description: "",
      location: "E5 6002",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 25, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Presentation - Waterloo B",
      description: "",
      location: "E5 6002",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Presentation - Carleton",
      description: "",
      location: "E5 6002",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 35, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Presentation - Western",
      description: "",
      location: "E5 6002",
      startDate: convertToEST(new Date(2016, 01, 30, 14, 10, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Presentation - UOIT",
      description: "",
      location: "E5 6002",
      startDate: convertToEST(new Date(2016, 01, 30, 15, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 15, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Presentation - Lakehead",
      description: "",
      location: "E5 6002",
      startDate: convertToEST(new Date(2016, 01, 30, 15, 35, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 16, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "Programming Presentation - Waterloo A",
      description: "",
      location: "E5 6002",
      startDate: convertToEST(new Date(2016, 01, 30, 16, 10, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 16, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UW A vs UOttawa",
      description: "",
      location: "E5 6004",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 50, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - Carleton 2 vs Laurentian",
      description: "",
      location: "E5 6006",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 50, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UW B vs York",
      description: "",
      location: "E5 6008",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 50, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - McMaster vs Carleton 1",
      description: "",
      location: "E5 6004",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 50, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UofT vs Ryerson",
      description: "",
      location: "E5 6006",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 50, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UOIT vs Queen's",
      description: "",
      location: "E5 6008",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 50, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UW A vs Carleton 1",
      description: "",
      location: "E5 6004",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - Carleton 2 vs Ryerson",
      description: "",
      location: "E5 6006",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UW B vs Queen's",
      description: "",
      location: "E5 6008",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UOttawa vs McMaster",
      description: "",
      location: "E5 6004",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 20, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UofT vs Laurentian",
      description: "",
      location: "E5 6006",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 20, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UOIT vs York",
      description: "",
      location: "E5 6008",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 20, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UW A vs McMaster",
      description: "",
      location: "E5 6004",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 05, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - Carleton 2 vs UofT",
      description: "",
      location: "E5 6006",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 05, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UOIT vs UW B",
      description: "",
      location: "E5 6006",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 05, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - UOttawa vs Carleton 1",
      description: "",
      location: "E5 6004",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - Laurentian vs Ryerson",
      description: "",
      location: "E5 6006",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - York vs Queen's",
      description: "",
      location: "E5 6008",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - Semi-final 1",
      description: "",
      location: "E5 6004",
      startDate: convertToEST(new Date(2016, 01, 30, 14, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 15, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "Debate - Semi-final 2",
      description: "",
      location: "E5 6004",
      startDate: convertToEST(new Date(2016, 01, 30, 15, 50, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 16, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - Ottawa",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - Lakehead",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 35, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - Western",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 10, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - Carleton 2",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 25, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - Waterloo B",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 30, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - Waterloo A",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 12, 50, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 20, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - Lakehead 2",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 25, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - UofT",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 14, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - Carleton 1",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 14, 45, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 15, 15, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - Ryerson",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 15, 20, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 15, 50, 00)),
      attendees: []
    });
    Events.insert({
      title: "Communications Presentation - UOIT",
      description: "",
      location: "E5 3052",
      startDate: convertToEST(new Date(2016, 01, 30, 15, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 16, 25, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Waterloo A",
      description: "",
      location: "E5 3101",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 20, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - York",
      description: "",
      location: "E5 3102",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 20, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Windsor",
      description: "",
      location: "E5 3101",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 20, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Conestoga",
      description: "",
      location: "E5 3102",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 20, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Queen's",
      description: "",
      location: "E5 3101",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 45, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Carleton",
      description: "",
      location: "E5 3102",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 45, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Guelph",
      description: "",
      location: "E5 3101",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 05, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 25, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Waterloo B",
      description: "",
      location: "E5 3102",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 05, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 25, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - UOIT 1",
      description: "",
      location: "E5 3101",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Ryerson",
      description: "",
      location: "E5 3102",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 00, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - UOttawa",
      description: "",
      location: "E5 3101",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 20, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - McMaster",
      description: "",
      location: "E5 3102",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 20, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Lakehead",
      description: "",
      location: "E5 3101",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 25, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - RMC",
      description: "",
      location: "E5 3102",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 25, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Laurentian",
      description: "",
      location: "E5 3101",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 45, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - UOIT 2",
      description: "",
      location: "E5 3102",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 45, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 05, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - UofT",
      description: "",
      location: "E5 3101",
      startDate: convertToEST(new Date(2016, 01, 30, 12, 35, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Western",
      description: "",
      location: "E5 3102",
      startDate: convertToEST(new Date(2016, 01, 30, 12, 35, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Presentation - Laurentian 2",
      description: "",
      location: "E5 3101",
      startDate: convertToEST(new Date(2016, 01, 30, 12, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 15, 00)),
      attendees: []
    });
    Events.insert({
      title: "SD Testing - All Teams",
      description: "",
      location: "E5 3102",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 25, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 16, 40, 00)),
      attendees: []
    });
    Events.insert({
      title: "Innovative Design Presentation - UOIT",
      description: "",
      location: "E5 2004",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 00, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 9, 45, 00)),
      attendees: []
    });
    Events.insert({
      title: "Innovative Design Presentation - Waterloo B",
      description: "",
      location: "E5 2004",
      startDate: convertToEST(new Date(2016, 01, 30, 9, 45, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 10, 30, 00)),
      attendees: []
    });
    Events.insert({
      title: "Innovative Design Presentation - UofT 1",
      description: "",
      location: "E5 2004",
      startDate: convertToEST(new Date(2016, 01, 30, 10, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 11, 25, 00)),
      attendees: []
    });
    Events.insert({
      title: "Innovative Design Presentation - Carleton",
      description: "",
      location: "E5 2004",
      startDate: convertToEST(new Date(2016, 01, 30, 11, 25, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 12, 10, 00)),
      attendees: []
    });
    Events.insert({
      title: "Innovative Design Presentation - UOttawa",
      description: "",
      location: "E5 2004",
      startDate: convertToEST(new Date(2016, 01, 30, 12, 40, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 13, 25, 00)),
      attendees: []
    });
    Events.insert({
      title: "Innovative Design Presentation - UofT 2",
      description: "",
      location: "E5 2004",
      startDate: convertToEST(new Date(2016, 01, 30, 13, 25, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 10, 00)),
      attendees: []
    });
    Events.insert({
      title: "Innovative Design Presentation - Western",
      description: "",
      location: "E5 2004",
      startDate: convertToEST(new Date(2016, 01, 30, 14, 10, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 14, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "Innovative Design Presentation - Waterloo A",
      description: "",
      location: "E5 2004",
      startDate: convertToEST(new Date(2016, 01, 30, 15, 10, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 15, 55, 00)),
      attendees: []
    });
    Events.insert({
      title: "Innovative Design Presentation - Ryerson",
      description: "",
      location: "E5 2004",
      startDate: convertToEST(new Date(2016, 01, 30, 15, 55, 00)),
      endDate: convertToEST(new Date(2016, 01, 30, 16, 40, 00)),
      attendees: []
    });
  } catch (e) { }
});
