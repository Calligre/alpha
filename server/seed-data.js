Meteor.startup(function() {
  Activities._ensureIndex({text: 1, image: 1, date: 1}, {unique: true, dropDups: true});
  // Activities.insert({
  //   text: "CDE 2015 is so cool I love life, the Universe, and everything!!!! #cde2015",
  //   image: null,
  //   userAvatar: "https://avatars1.githubusercontent.com/u/3341822?v=2&s=400",
  //   userName: "Kevin James",
  //   place: "Waterloo, Ontario",
  //   date: new Date(2000)
  // });
  // Activities.insert({
  //   text: "#cde2015",
  //   image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
  //   userAvatar: "https://avatars1.githubusercontent.com/u/3341822?v=2&s=400",
  //   userName: "Kevin James",
  //   place: "Waterloo, Ontario",
  //   date: new Date(2000)
  // });

  Events._ensureIndex({title: 1, speaker: 1, startDate: 1, endDate: 1}, {unique: true, dropDups: true});
  try {
    Events.insert({
      title: "Bowling at Bingemans",
      speaker: null,
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A casual night of bowling and socializing with other delegates, hosted by Bingemans bowling alleys and Boston Pizza. There will be a light dinner, and feel free to dress comfortably (ie Jeans/ kakis and a nice shirt). Wear all your school swag and show off your school pride!",
      startDate: new Date(2015, 10, 13, 18, 00),
      endDate: new Date(2015, 10, 13, 23, 00),
      location: "Bingemans",
      attendees: []
    });

    Events.insert({
      title: "Breakfast",
      speaker: null,
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: null,
      startDate: new Date(2015, 10, 14, 8, 00),
      endDate: new Date(2015, 10, 14, 9, 00),
      location: "Waterloo Inn",
      attendees: []
    });

    Events.insert({
      title: "Looking Back",
      speaker: "Irving Leblanc, Assembly of First Nations",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A retrospective on diversity in engineering, how far we've come and how far we have to go.\nWelcome: University of Waterloo Aboriginal Student Association\nOpening Remarks: Mary Wells, University of Waterloo\nSponsor Introduction: Melanie Stare, Potash Corporation",
      startDate: new Date(2015, 10, 14, 9, 00),
      endDate: new Date(2015, 10, 14, 10, 15),
      location: "Regent Room",
      attendees: []
    });

    Events.insert({
      title: "Psychology and Behaviour",
      speaker: "Crystal Tse, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "This talk will examine social psychological research on issues related to women's and minorities' experiences in the fields in which they are underrepresented and negatively stereotyped.",
      startDate: new Date(2015, 10, 14, 10, 15),
      endDate: new Date(2015, 10, 14, 11, 15),
      location: "Rosedale Room",
      attendees: []
    });
    Events.insert({
      title: "Engineering Abroad (Panel)",
      speaker: "Channa Potter, University of Waterloo\nKaoru Yajima, Region of Waterloo\nVictoria Debrincat, University of Waterloo\nModerator: Zenon Kripki, CFES",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "Strategies for working abroad, emphasizing the importance of diverse experiences.",
      startDate: new Date(2015, 10, 14, 10, 15),
      endDate: new Date(2015, 10, 14, 11, 15),
      location: "Heritage Room",
      attendees: []
    });
    Events.insert({
      title: "Encouraging Diversity in Engineering Through Outreach ",
      speaker: "Alan Ham, Engineers Without Borders",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "Engineers Without Borders",
      startDate: new Date(2015, 10, 14, 10, 15),
      endDate: new Date(2015, 10, 14, 11, 15),
      location: "Bloomingdale Room",
      attendees: []
    });

    Events.insert({
      title: "Pushing the Status Quo (Panel)",
      speaker: "Natasha Phidd, University of Waterloo\nGregory Desrosiers, University of Waterloo\nVanessa Raponi, McMaster University\nRotimi Fadiya, McMaster University\nModerator: Alicia Veilleux, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A discussion of the importance of visible and invisible minority representation throughout engineering.",
      startDate: new Date(2015, 10, 14, 11, 30),
      endDate: new Date(2015, 10, 14, 12, 30),
      location: "Rosedale Room",
      attendees: []
    });
    Events.insert({
      title: "Outside Engineering (Panel)",
      speaker: "Wilfred So, Blake, Cassels & Graydon LLP\nDavid McLeod, McMaster University\nStephanie Rozek, A Year of Code Waterloo Region\nModerator: Clarisse Schneider, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "Views from professionals who studied engineering but pursued nontraditional roles both within and beyond the industry.",
      startDate: new Date(2015, 10, 14, 11, 30),
      endDate: new Date(2015, 10, 14, 12, 30),
      location: "Heritage Room",
      attendees: []
    });
    Events.insert({
      title: "Engineering in Canada (Panel)",
      speaker: "Mihaela Vlasea, University of Waterloo\nJulia Salvini,  Salvini Consulting Inc.\nMatthew Irvine, Eden Energy Equipment\nMelanie Stare, Potash Corporation\nModerator: Patricia Duong, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A discussion of Canadian engineering challenges where a diverse set of talents from the current cohort of engineering students is required.",
      startDate: new Date(2015, 10, 14, 11, 30),
      endDate: new Date(2015, 10, 14, 12, 30),
      location: "Bloomingdale Room",
      attendees: []
    });

    Events.insert({
      title: "Career Fair and Lunch",
      speaker: null,
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: null,
      startDate: new Date(2015, 10, 14, 12, 30),
      endDate: new Date(2015, 10, 14, 14, 00),
      location: "Waterloo Inn",
      attendees: []
    });

    Events.insert({
      title: "Presenting Yourself with Credibility",
      speaker: "Marco Yim, Extempra",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A communication workshop that will enable you to speak in a manner that makes people want to listen.",
      startDate: new Date(2015, 10, 14, 14, 00),
      endDate: new Date(2015, 10, 14, 17, 00),
      location: "Rosedale Room",
      attendees: []
    });
    Events.insert({
      title: "Intersectionality",
      speaker: "Filzah Nasir, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive introduction to the study of intersections between forms and systems of oppression, domination or discrimination.",
      startDate: new Date(2015, 10, 14, 14, 00),
      endDate: new Date(2015, 10, 14, 17, 00),
      location: "Heritage Room",
      attendees: []
    });
    Events.insert({
      title: "Principles of Inclusivity",
      speaker: "Tanveer Umar and Carol Cunningham, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive workshop to understand your perception of diversity and learn skills to practise and promote inclusivity on your campus.",
      startDate: new Date(2015, 10, 14, 14, 00),
      endDate: new Date(2015, 10, 14, 15, 30),
      location: "St. Jacob's Room",
      attendees: []
    });
    Events.insert({
      title: "Principles of Inclusivity",
      speaker: "Tanveer Umar and Carol Cunningham, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive workshop to understand your perception of diversity and learn skills to practise and promote inclusivity on your campus.",
      startDate: new Date(2015, 10, 14, 15, 30),
      endDate: new Date(2015, 10, 14, 17, 00),
      location: "St. Jacob's Room",
      attendees: []
    });
    Events.insert({
      title: "Staying Healthy and Speaking Up",
      speaker: "Hannah Gautreau, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive session to learn all about mental health, how it affects you as a student leader, and how you can be a successful advocate.",
      startDate: new Date(2015, 10, 14, 14, 00),
      endDate: new Date(2015, 10, 14, 15, 30),
      location: "Bloomingdale Room",
      attendees: []
    });
    Events.insert({
      title: "Language of Sexuality",
      speaker: "Vanessa Raponi, McMaster University",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive session to learn about the complexities of language within the LGBTQ+ community.",
      startDate: new Date(2015, 10, 14, 15, 30),
      endDate: new Date(2015, 10, 14, 17, 00),
      location: "Bloomingdale Room",
      attendees: []
    });

    Events.insert({
      title: "Networking Dinner and Trivia",
      speaker: null,
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "Trivia! Enjoy a traditional German dinner hosted by the German Schwaben Clud in Kitchener. This will be our networking dinner, along with a fun night of trivia after food!\nBuses at 5:30pm and 6:00pm, then at 10:45pm and 11:30pm",
      startDate: new Date(2015, 10, 14, 18, 00),
      endDate: new Date(2015, 10, 14, 23, 00),
      location: "Schwaben Hall",
      attendees: []
    });

    Events.insert({
      title: "Breakfast",
      speaker: null,
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: null,
      startDate: new Date(2015, 10, 15, 8, 00),
      endDate: new Date(2015, 10, 15, 8, 45),
      location: "Waterloo Inn",
      attendees: []
    });

    Events.insert({
      title: "Keynote",
      speaker: "Erica Garcia Lee, Erica Lee Consulting",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "Erica Lee from Erica Lee Consulting delivers the morning Keynote.\nBuses at 8:40am and 9:05am",
      startDate: new Date(2015, 10, 15, 9, 15),
      endDate: new Date(2015, 10, 15, 10, 45),
      location: "DC 1351",
      attendees: []
    });

    Events.insert({
      title: "Equal Opportunity Employment (Panel)",
      speaker: "Mahejabeen Ebrahim, University of Waterloo\nCathy Gallagher-Louisy, Canadian Centre for Diversity and Inclusion\nCelia Featherby, Hydro One\nModerator: Jodi Szimanski,  University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A discussion on recruitment programs and their objective to create diverse workplaces.",
      startDate: new Date(2015, 10, 15, 11, 00),
      endDate: new Date(2015, 10, 15, 12, 15),
      location: "E5 6006",
      attendees: []
    });
    Events.insert({
      title: "Women and Gender in Engineering (Panel)",
      speaker: "Erica Garcia Lee, Erica Lee Consulting\nLindsay Melvin, Engineers Canada\nRuth Silver, Groundswell\nMary Wells, University of Waterloo\nModerator: Claire Heymans, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "Strategies for a shift toward an engineering industry that is representative of society.",
      startDate: new Date(2015, 10, 15, 11, 00),
      endDate: new Date(2015, 10, 15, 12, 15),
      location: "E5 6008",
      attendees: []
    });
    Events.insert({
      title: "Water Infrastructure in Aboriginal Communities",
      speaker: "Irving Leblanc, Assembly of First Nations",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A discussion of water infrastructure issues faced by Aboriginal communities.",
      startDate: new Date(2015, 10, 15, 11, 00),
      endDate: new Date(2015, 10, 15, 12, 15),
      location: "E5 6003",
      attendees: []
    });

    Events.insert({
      title: "Lunch",
      speaker: null,
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "NOTE: includes walking time",
      startDate: new Date(2015, 10, 15, 12, 15),
      endDate: new Date(2015, 10, 15, 13, 45),
      location: "FED Hall",
      attendees: []
    });

    Events.insert({
      title: "Debate",
      speaker: "Waterloo & McMaster Debate Teams",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A formal debate between Waterloo and McMaster engineering debate teams, on the resolution: “BIRT equal outcome is a preferable approach to equal opportunity to increase diversity in engineering.",
      startDate: new Date(2015, 10, 15, 13, 45),
      endDate: new Date(2015, 10, 15, 14, 45),
      location: "E5 6003",
      attendees: []
    });
    Events.insert({
      title: "Lightning Talks",
      speaker: "Various",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A delegate presented set of \"TED style\" talks featuring cool ideas, projects, and experiences.",
      startDate: new Date(2015, 10, 15, 13, 45),
      endDate: new Date(2015, 10, 15, 14, 45),
      location: "E5 6006, 6008",
      attendees: []
    });

    Events.insert({
      title: "Open Space",
      speaker: "You!",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A participant-directed collection of parallel discussions centered on the conference theme, Algorithms for Success.",
      startDate: new Date(2015, 10, 15, 15, 00),
      endDate: new Date(2015, 10, 15, 16, 30),
      location: "E5 6003, 6006, 6008",
      attendees: []
    });

    Events.insert({
      title: "Looking Forward (& Gala Dinner, Cocktail Hour)",
      speaker: "Melanie Stare, Potash Corporation\nClosing Remarks:\nZenon Kripki, CFES\nKristina Lee, Chair CDE 2015",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "At 6pm, an opportunity to network and take some photos with your fellow delegates before the banquet begins. Then, at 6:30pm, the final banquet to end the inaugural Conference on Diversity in Engineering featuring a keynote called \"Looking Forward\": a call to action for current engineering students and their future influence by embracing diversity.\nBuses to Waterloo Inn at 4:30pm and 4:45pm",
      startDate: new Date(2015, 10, 15, 18, 00),
      endDate: new Date(2015, 10, 15, 23, 00),
      location: "Waterloo Inn",
      attendees: []
    });
  } catch (e) { }
});
