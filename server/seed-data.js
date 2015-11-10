Meteor.startup(function() {
  Activities._ensureIndex({text: 1, userName: 1}, {unique: true, dropDups: true});
  // Activities.insert({
  //   text: "CDE 2015 is so cool I love life, the Universe, and everything!!!! #cde2015",
  //   image: null,
  //   userAvatar: "https://avatars1.githubusercontent.com/u/3341822?v=2&s=400",
  //   userName: "Kevin James",
  //   place: "Waterloo, Ontario",
  //   date: new Date(2000),
  //   likes: []
  // });
  // Activities.insert({
  //   text: "#cde2015",
  //   image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
  //   userAvatar: "https://avatars1.githubusercontent.com/u/3341822?v=2&s=400",
  //   userName: "Kevin James",
  //   place: "Waterloo, Ontario",
  //   date: new Date(2000),
  //   likes: []
  // });

  Events._ensureIndex({title: 1, speaker: 1, startDate: 1, endDate: 1}, {unique: true, dropDups: true});
  try {
    Events.insert({
      title: "Looking Back",
      speaker: "Irving Leblanc, Assembly of First Nations",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A retrospective on diversity in engineering, how far we've come and how far we have to go.\nWelcome: University of Waterloo Aboriginal Student Association\nOpening Remarks: Mary Wells, University of Waterloo\nSponsor Introduction: Melanie Stare, Potash Corporation",
      startDate: new Date(2015, 11, 14, 9, 00),
      endDate: new Date(2015, 11, 14, 10, 15),
      location: "Waterloo Inn",
      attendees: []
    });
    Events.insert({
      title: "Psychology and Behaviour",
      speaker: "Crystal Tse, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "This talk will examine social psychological research on issues related to women's and minorities' experiences in the fields in which they are underrepresented and negatively stereotyped.",
      startDate: new Date(2015, 11, 14, 10, 15),
      endDate: new Date(2015, 11, 14, 11, 15),
      location: "Room 1",
      attendees: []
    });
    Events.insert({
      title: "Engineering Abroad (Panel)",
      speaker: "Channa Potter, University of Waterloo\nKaoru Yajima, Region of Waterloo\nVictoria Debrincat, University of Waterloo\nModerator: Zenon Kripki, CFES",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "Strategies for working abroad, emphasizing the importance of diverse experiences.",
      startDate: new Date(2015, 11, 14, 10, 15),
      endDate: new Date(2015, 11, 14, 11, 15),
      location: "Room 2",
      attendees: []
    });
    Events.insert({
      title: "Encouraging Diversity in Engineering Through Outreach ",
      speaker: "Alan Ham, Engineers Without Borders",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: null,
      startDate: new Date(2015, 11, 14, 10, 15),
      endDate: new Date(2015, 11, 14, 11, 15),
      location: "Room 3",
      attendees: []
    });
    Events.insert({
      title: "Pushing the Status Quo (Panel)",
      speaker: "Natasha Phidd, University of Waterloo\nGregory Desrosiers, University of Waterloo\nVanessa Raponi, McMaster University\nRotimi Fadiya, McMaster University\nModerator: Alicia Veilleux, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A discussion of the importance of visible and invisible minority representation throughout engineering.",
      startDate: new Date(2015, 11, 14, 11, 30),
      endDate: new Date(2015, 11, 14, 12, 30),
      location: "Room 1",
      attendees: []
    });
    Events.insert({
      title: "Outside Engineering (Panel)",
      speaker: "Wilfred So, Blake, Cassels & Graydon LLP\nDavid McLeod, McMaster University\nStephanie Rozek, A Year of Code Waterloo Region\nModerator: Clarisse Schneider, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "Views from professionals who studied engineering but pursued nontraditional roles both within and beyond the industry.",
      startDate: new Date(2015, 11, 14, 11, 30),
      endDate: new Date(2015, 11, 14, 12, 30),
      location: "Room 2",
      attendees: []
    });
    Events.insert({
      title: "Engineering in Canada (Panel)",
      speaker: "Mihaela Vlasea, University of Waterloo\nJulia Salvini,  Salvini Consulting Inc.\nMatthew Irvine, Eden Energy Equipment\nMelanie Stare, Potash Corporation\nModerator: Patricia Duong, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A discussion of Canadian engineering challenges where a diverse set of talents from the current cohort of engineering students is required.",
      startDate: new Date(2015, 11, 14, 11, 30),
      endDate: new Date(2015, 11, 14, 12, 30),
      location: "Room 3",
      attendees: []
    });
    Events.insert({
      title: "Presenting Yourself with Credibility",
      speaker: "Marco Yim, Extempra",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A communication workshop that will enable you to speak in a manner that makes people want to listen.",
      startDate: new Date(2015, 11, 14, 14, 00),
      endDate: new Date(2015, 11, 14, 17, 00),
      location: "Room 1",
      attendees: []
    });
    Events.insert({
      title: "Intersectionality",
      speaker: "Filzah Nasir, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive introduction to the study of intersections between forms and systems of oppression, domination or discrimination.",
      startDate: new Date(2015, 11, 14, 14, 00),
      endDate: new Date(2015, 11, 14, 17, 00),
      location: "Room 2",
      attendees: []
    });
    Events.insert({
      title: "Principles of Inclusivity",
      speaker: "Tanveer Umar and Carol Cunningham, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive workshop to understand your perception of diversity and learn skills to practise and promote inclusivity on your campus.",
      startDate: new Date(2015, 11, 14, 14, 00),
      endDate: new Date(2015, 11, 14, 15, 30),
      location: "Room 3",
      attendees: []
    });
    Events.insert({
      title: "Principles of Inclusivity",
      speaker: "Tanveer Umar and Carol Cunningham, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive workshop to understand your perception of diversity and learn skills to practise and promote inclusivity on your campus.",
      startDate: new Date(2015, 11, 14, 15, 30),
      endDate: new Date(2015, 11, 14, 17, 00),
      location: "Room 3",
      attendees: []
    });
    Events.insert({
      title: "Staying Healthy and Speaking Up",
      speaker: "Hannah Gautreau, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive session to learn all about mental health, how it affects you as a student leader, and how you can be a successful advocate.",
      startDate: new Date(2015, 11, 14, 14, 00),
      endDate: new Date(2015, 11, 14, 15, 30),
      location: "Room 4",
      attendees: []
    });
    Events.insert({
      title: "Staying Healthy and Speaking Up",
      speaker: "Hannah Gautreau, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive session to learn all about mental health, how it affects you as a student leader, and how you can be a successful advocate.",
      startDate: new Date(2015, 11, 14, 15, 30),
      endDate: new Date(2015, 11, 14, 17, 00),
      location: "Room 4",
      attendees: []
    });
    Events.insert({
      title: "Language of Sexuality",
      speaker: "Vanessa Raponi, McMaster University",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive session to learn about the complexities of language within the LGBTQ+ community.",
      startDate: new Date(2015, 11, 14, 14, 00),
      endDate: new Date(2015, 11, 14, 15, 30),
      location: "Room 5",
      attendees: []
    });
    Events.insert({
      title: "Language of Sexuality",
      speaker: "Vanessa Raponi, McMaster University",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "An interactive session to learn about the complexities of language within the LGBTQ+ community.",
      startDate: new Date(2015, 11, 14, 15, 30),
      endDate: new Date(2015, 11, 14, 17, 00),
      location: "Room 5",
      attendees: []
    });
    Events.insert({
      title: "Keynote",
      speaker: "Erica Garcia Lee, Erica Lee Consulting",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: null,
      startDate: new Date(2015, 11, 15, 9, 15),
      endDate: new Date(2015, 11, 15, 10, 45),
      location: "Waterloo Hotel",
      attendees: []
    });
    Events.insert({
      title: "Equal Opportunity Employment (Panel)",
      speaker: "Mahejabeen Ebrahim, University of Waterloo\nCathy Gallagher-Louisy, Canadian Centre for Diversity and Inclusion\nCelia Featherby, Hydro One\nModerator: Jodi Szimanski,  University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A discussion on recruitment programs and their objective to create diverse workplaces.",
      startDate: new Date(2015, 11, 15, 11, 00),
      endDate: new Date(2015, 11, 15, 12, 15),
      location: "Room 1",
      attendees: []
    });
    Events.insert({
      title: "Women and Gender in Engineering (Panel)",
      speaker: "Erica Garcia Lee, Erica Lee Consulting\nLindsay Melvin, Engineers Canada\nRuth Silver, Groundswell\nMary Wells, University of Waterloo\nModerator: Claire Heymans, University of Waterloo",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "Strategies for a shift toward an engineering industry that is representative of society.",
      startDate: new Date(2015, 11, 15, 11, 00),
      endDate: new Date(2015, 11, 15, 12, 15),
      location: "Room 2",
      attendees: []
    });
    Events.insert({
      title: "Water Infrastructure in Aboriginal Communities",
      speaker: "Irving Leblanc, Assembly of First Nations",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A discussion of water infrastructure issues faced by Aboriginal communities.",
      startDate: new Date(2015, 11, 15, 11, 00),
      endDate: new Date(2015, 11, 15, 12, 15),
      location: "Room 3",
      attendees: []
    });
    Events.insert({
      title: "Debate",
      speaker: "Waterloo & McMaster Debate Teams",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A formal debate between Waterloo and McMaster engineering debate teams, on the resolution: “BIRT equal outcome is a preferable approach to equal opportunity to increase diversity in engineering.",
      startDate: new Date(2015, 11, 15, 13, 45),
      endDate: new Date(2015, 11, 15, 14, 45),
      location: "Room 1",
      attendees: []
    });
    Events.insert({
      title: "Lightning Talks",
      speaker: "Various",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A delegate presented set of \"TED style\" talks featuring cool ideas, projects, and experiences.",
      startDate: new Date(2015, 11, 15, 13, 45),
      endDate: new Date(2015, 11, 15, 14, 45),
      location: "Room 2",
      attendees: []
    });
    Events.insert({
      title: "Open Space",
      speaker: "You!",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A participant-directed collection of parallel discussions centered on the conference theme, Algorithms for Success.",
      startDate: new Date(2015, 11, 15, 15, 00),
      endDate: new Date(2015, 11, 15, 16, 30),
      location: "Waterloo Hotel",
      attendees: []
    });
    Events.insert({
      title: "Looking Forward (& Gala Dinner)",
      speaker: "Melanie Stare, Potash Corporation\nClosing Remarks:\nZenon Kripki, CFES\nKristina Lee, Chair CDE 2015",
      image: "/img/activity/activity-placeholder-strawberry-640x640.jpg",
      description: "A call to action for current engineering students, and their future influence by embracing diversity.",
      startDate: new Date(2015, 11, 15, 18, 30),
      endDate: new Date(2015, 11, 15, 23, 00),
      location: "Waterloo Hotel",
      attendees: []
    });
  } catch (e) { }
});
