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
      title: "Bowling at Bingemans",
      speaker: null,
      image: "http://oakforestbowl.com/portals/0/Images/open-bowling-strike.jpg",
      description: "A casual night of bowling and socializing with other delegates, hosted by Bingemans bowling alleys and Boston Pizza. There will be a light dinner, and feel free to dress comfortably (ie Jeans/ kakis and a nice shirt). Wear all your school swag and show off your school pride!",
      startDate: convertToEST(new Date(2015, 10, 13, 18, 00)),
      endDate: convertToEST(new Date(2015, 10, 13, 23, 00)),
      location: "Bingemans",
      attendees: []
    });

    Events.insert({
      title: "Breakfast",
      speaker: null,
      image: "http://thebridge-can.com/wp-content/uploads/2015/05/Breakfast-Eggs-Bacon-Pancakes.jpg",
      description: null,
      startDate: convertToEST(new Date(2015, 10, 14, 8, 00)),
      endDate: convertToEST(new Date(2015, 10, 14, 9, 00)),
      location: "Waterloo Inn",
      attendees: []
    });

    Events.insert({
      title: "Looking Back",
      speaker: "Irving Leblanc, Assembly of First Nations",
      image: "http://manofdepravity.com/wp-content/uploads/2013/12/no-looking-back1.jpg",
      description: "A retrospective on diversity in engineering, how far we've come and how far we have to go.\nWelcome: University of Waterloo Aboriginal Student Association\nOpening Remarks: Mary Wells, University of Waterloo\nSponsor Introduction: Melanie Stare, Potash Corporation",
      startDate: convertToEST(new Date(2015, 10, 14, 9, 00)),
      endDate: convertToEST(new Date(2015, 10, 14, 10, 15)),
      location: "Regent Room",
      attendees: []
    });

    Events.insert({
      title: "Women in STEM: A Social Psychological Approach",
      speaker: "Crystal Tse, University of Waterloo",
      image: "http://www2.le.ac.uk/colleges/medbiopsych/research/r-themes/nb/images/strands.gif",
      description: "This talk will examine social psychological research on issues related to women's and minorities' experiences in the fields in which they are underrepresented and negatively stereotyped.",
      startDate: convertToEST(new Date(2015, 10, 14, 10, 15)),
      endDate: convertToEST(new Date(2015, 10, 14, 11, 15)),
      location: "Rosedale Room",
      attendees: []
    });
    Events.insert({
      title: "Engineering Abroad (Panel)",
      speaker: "Channa Potter, University of Waterloo\nKaoru Yajima, Region of Waterloo\nVictoria Debrincat, University of Waterloo\nModerator: Zenon Kripki, CFES",
      image: "http://engineering.nyu.edu/cable/sites/default/files/imagecache/story_img/feature_img/Engineers%20Aboard.png",
      description: "Strategies for working abroad, emphasizing the importance of diverse experiences.",
      startDate: convertToEST(new Date(2015, 10, 14, 10, 15)),
      endDate: convertToEST(new Date(2015, 10, 14, 11, 15)),
      location: "Heritage Room",
      attendees: []
    });
    Events.insert({
      title: "Encouraging Diversity in Engineering Through Outreach",
      speaker: "Alan Ham, Engineers of Tomorrow - Engineers Without Borders",
      image: "http://www.colorado.edu/engineering/sites/default/files/ewb-img-amelia-lyons.jpg",
      description: "This session will talk about modern engineering messaging and its value to the future of the profession.",
      startDate: convertToEST(new Date(2015, 10, 14, 10, 15)),
      endDate: convertToEST(new Date(2015, 10, 14, 11, 15)),
      location: "Bloomingdale Room",
      attendees: []
    });

    Events.insert({
      title: "Pushing the Status Quo (Panel)",
      speaker: "Natasha Phidd, University of Waterloo\nGregory Desrosiers, University of Waterloo\nVanessa Raponi, McMaster University\nRotimi Fadiya, McMaster University\nModerator: Alicia Veilleux, University of Waterloo",
      image: "http://36.media.tumblr.com/a9a2d2cc696acafaa9ab324a975e7abe/tumblr_mubuj12Yfs1qd87voo1_500.jpg",
      description: "A discussion of the importance of visible and invisible minority representation throughout engineering.",
      startDate: convertToEST(new Date(2015, 10, 14, 11, 30)),
      endDate: convertToEST(new Date(2015, 10, 14, 12, 30)),
      location: "Rosedale Room",
      attendees: []
    });
    Events.insert({
      title: "Outside Engineering (Panel)",
      speaker: "Wilfred So, Blake, Cassels & Graydon LLP\nDavid McLeod, McMaster University\nStephanie Rozek, A Year of Code Waterloo Region\nModerator: Clarisse Schneider, University of Waterloo",
      image: "https://jerinsantosh.files.wordpress.com/2011/01/image001.jpg",
      description: "Views from professionals who studied engineering but pursued nontraditional roles both within and beyond the industry.",
      startDate: convertToEST(new Date(2015, 10, 14, 11, 30)),
      endDate: convertToEST(new Date(2015, 10, 14, 12, 30)),
      location: "Heritage Room",
      attendees: []
    });
    Events.insert({
      title: "Engineering in Canada (Panel)",
      speaker: "Mihaela Vlasea, University of Waterloo\nJulia Salvini,  Salvini Consulting Inc.\nMatthew Irvine, Eden Energy Equipment\nMelanie Stare, Potash Corporation\nModerator: Patricia Duong, University of Waterloo",
      image: "http://eic-ici.ca/IMG/(10).gif",
      description: "A discussion of Canadian engineering challenges where a diverse set of talents from the current cohort of engineering students is required.",
      startDate: convertToEST(new Date(2015, 10, 14, 11, 30)),
      endDate: convertToEST(new Date(2015, 10, 14, 12, 30)),
      location: "Bloomingdale Room",
      attendees: []
    });

    Events.insert({
      title: "Career Fair and Lunch",
      speaker: null,
      image: "http://blogs.mcgill.ca/caps/files/2014/10/careerfair.gif",
      description: null,
      startDate: convertToEST(new Date(2015, 10, 14, 12, 30)),
      endDate: convertToEST(new Date(2015, 10, 14, 14, 00)),
      location: "Waterloo Inn",
      attendees: []
    });

    Events.insert({
      title: "Presenting Yourself with Credibility",
      speaker: "Marco Yim, Extempra",
      image: "http://attitudes4innovation.com/wp-content/uploads/2015/09/Self-confidence1.jpg",
      description: "A communication workshop that will enable you to speak in a manner that makes people want to listen.",
      startDate: convertToEST(new Date(2015, 10, 14, 14, 00)),
      endDate: convertToEST(new Date(2015, 10, 14, 17, 00)),
      location: "Rosedale Room",
      attendees: []
    });
    Events.insert({
      title: "Intersectionality",
      speaker: "Filzah Nasir, University of Waterloo",
      image: "https://thecandleramiblog.files.wordpress.com/2014/12/intersectionality-580x483.jpg",
      description: "An interactive workshop that will  introduce the systematic barriers experienced by students in their quest for education.",
      startDate: convertToEST(new Date(2015, 10, 14, 14, 00)),
      endDate: convertToEST(new Date(2015, 10, 14, 17, 00)),
      location: "Heritage Room",
      attendees: []
    });
    Events.insert({
      title: "Principles of Inclusivity",
      speaker: "Tanveer Umar and Carol Cunningham, University of Waterloo",
      image: "http://www.ardluce.co.uk/sites%5Cdefault%5Cfiles%5Cstyles%5Cslider%5Cpublic%5Cinclusivity.jpg?itok=VDXXGd8s",
      description: "An interactive workshop to understand your perception of diversity and learn skills to practise and promote inclusivity on your campus.",
      startDate: convertToEST(new Date(2015, 10, 14, 14, 00)),
      endDate: convertToEST(new Date(2015, 10, 14, 15, 30)),
      location: "St. Jacob's Room",
      attendees: []
    });
    Events.insert({
      title: "Principles of Inclusivity",
      speaker: "Tanveer Umar and Carol Cunningham, University of Waterloo",
      image: "http://www.ardluce.co.uk/sites%5Cdefault%5Cfiles%5Cstyles%5Cslider%5Cpublic%5Cinclusivity.jpg?itok=VDXXGd8s",
      description: "An interactive workshop to understand your perception of diversity and learn skills to practise and promote inclusivity on your campus.",
      startDate: convertToEST(new Date(2015, 10, 14, 15, 30)),
      endDate: convertToEST(new Date(2015, 10, 14, 17, 00)),
      location: "St. Jacob's Room",
      attendees: []
    });
    Events.insert({
      title: "Staying Healthy and Speaking Up",
      speaker: "Hannah Gautreau, University of Waterloo",
      image: "http://www.canadianbfrb.org/wp-content/uploads/2015/09/Mental-Health.jpg",
      description: "An interactive session to learn all about mental health, how it affects you as a student leader, and how you can be a successful advocate.",
      startDate: convertToEST(new Date(2015, 10, 14, 14, 00)),
      endDate: convertToEST(new Date(2015, 10, 14, 15, 30)),
      location: "Bloomingdale Room",
      attendees: []
    });
    Events.insert({
      title: "Language of Sexuality",
      speaker: "Vanessa Raponi, McMaster University",
      image: "https://library.fiu.edu/sites/default/files/uploads/women.png",
      description: "An interactive session to learn about the complexities of language within the LGBTQ+ community.",
      startDate: convertToEST(new Date(2015, 10, 14, 15, 30)),
      endDate: convertToEST(new Date(2015, 10, 14, 17, 00)),
      location: "Bloomingdale Room",
      attendees: []
    });

    Events.insert({
      title: "Networking Dinner and Trivia",
      speaker: null,
      image: "http://www.eatdrinkrabbit.com/wp-content/uploads/2015/04/homer2-300x256.png",
      description: "Trivia! Enjoy a traditional German dinner hosted by the German Schwaben Clud in Kitchener. This will be our networking dinner, along with a fun night of trivia after food!\nBuses at 5:30pm and 6:00pm, then at 10:45pm and 11:30pm",
      startDate: convertToEST(new Date(2015, 10, 14, 18, 00)),
      endDate: convertToEST(new Date(2015, 10, 14, 23, 00)),
      location: "Schwaben Hall",
      attendees: []
    });

    Events.insert({
      title: "Breakfast",
      speaker: null,
      image: "http://thebridge-can.com/wp-content/uploads/2015/05/Breakfast-Eggs-Bacon-Pancakes.jpg",
      description: null,
      startDate: convertToEST(new Date(2015, 10, 15, 8, 00)),
      endDate: convertToEST(new Date(2015, 10, 15, 8, 45)),
      location: "Waterloo Inn",
      attendees: []
    });

    Events.insert({
      title: "Keynote: Changing the World Through Design",
      speaker: "Erica Garcia Lee, Erica Lee Consulting",
      image: "http://www.ericaleeconsulting.com/wp-content/uploads/2012/10/DSCN177021.jpeg",
      description: "An exploration of the intersection between engineering and design, and how diversity adds to the problem solving process.\nBuses at 8:40am and 9:05am",
      startDate: convertToEST(new Date(2015, 10, 15, 9, 15)),
      endDate: convertToEST(new Date(2015, 10, 15, 10, 45)),
      location: "DC 1351",
      attendees: []
    });

    Events.insert({
      title: "Equal Opportunity Employment (Panel)",
      speaker: "Mahejabeen Ebrahim, University of Waterloo\nCathy Gallagher-Louisy, Canadian Centre for Diversity and Inclusion\nCelia Featherby, Hydro One\nModerator: Jodi Szimanski,  University of Waterloo",
      image: "http://www.northropgrumman.com/CorporateResponsibility/Diversity/PublishingImages/internal-diversity3-734x265.jpg",
      description: "A discussion on recruitment programs and their objective to create diverse workplaces.",
      startDate: convertToEST(new Date(2015, 10, 15, 11, 00)),
      endDate: convertToEST(new Date(2015, 10, 15, 12, 15)),
      location: "E5 6006",
      attendees: []
    });
    Events.insert({
      title: "Women and Gender in Engineering (Panel)",
      speaker: "Erica Garcia Lee, Erica Lee Consulting\nLindsay Melvin, Engineers Canada\nRuth Silver, Groundswell\nMary Wells, University of Waterloo\nModerator: Claire Heymans, University of Waterloo",
      image: "https://assets.nerdwallet.com/blog/wp-content/uploads/2015/10/women-engineering.jpg",
      description: "Strategies for a shift toward an engineering industry that is representative of society.",
      startDate: convertToEST(new Date(2015, 10, 15, 11, 00)),
      endDate: convertToEST(new Date(2015, 10, 15, 12, 15)),
      location: "E5 6008",
      attendees: []
    });
    Events.insert({
      title: "Water Infrastructure in First Nation Communities",
      speaker: "Irving Leblanc, Assembly of First Nations",
      image: "http://i.cbc.ca/1.2014294.1381567477!/httpImage/image.jpg_gen/derivatives/original_300/si-strahl-watercp4680407.jpg",
      description: "A discussion of water infrastructure issues faced by Aboriginal communities.",
      startDate: convertToEST(new Date(2015, 10, 15, 11, 00)),
      endDate: convertToEST(new Date(2015, 10, 15, 12, 15)),
      location: "E5 6003",
      attendees: []
    });

    Events.insert({
      title: "Lunch",
      speaker: null,
      image: "http://www.knorr.com/Images/1020/1020-634982-P171251013030521_5.jpg",
      description: "NOTE: includes walking time",
      startDate: convertToEST(new Date(2015, 10, 15, 12, 15)),
      endDate: convertToEST(new Date(2015, 10, 15, 13, 45)),
      location: "FED Hall",
      attendees: []
    });

    Events.insert({
      title: "Debate",
      speaker: "Waterloo & McMaster Debate Teams",
      image: "http://www2.humboldt.edu/elearning/uploads/2013/10/Debate2-940x705.jpg",
      description: "A formal debate between Waterloo and McMaster engineering debate teams, on the resolution: “BIRT equal outcome is a preferable approach to equal opportunity to increase diversity in engineering.",
      startDate: convertToEST(new Date(2015, 10, 15, 13, 45)),
      endDate: convertToEST(new Date(2015, 10, 15, 14, 45)),
      location: "E5 6003",
      attendees: []
    });
    Events.insert({
      title: "Lightning Talks",
      speaker: "Various",
      image: "http://cdn-media-1.lifehack.org/wp-content/files/2014/09/Set2Photo_RyanLashTED.jpg",
      description: "A delegate presented set of \"TED style\" talks featuring cool ideas, projects, and experiences.",
      startDate: convertToEST(new Date(2015, 10, 15, 13, 45)),
      endDate: convertToEST(new Date(2015, 10, 15, 14, 45)),
      location: "E5 6006, 6008",
      attendees: []
    });

    Events.insert({
      title: "Open Space",
      speaker: "You!",
      image: "http://engage.wisc.edu/collaboration/images/brochure-students-mediumGr.png",
      description: "A participant-directed collection of parallel discussions centered on the conference theme, Algorithms for Success.",
      startDate: convertToEST(new Date(2015, 10, 15, 15, 00)),
      endDate: convertToEST(new Date(2015, 10, 15, 16, 30)),
      location: "E5 6003, 6006, 6008",
      attendees: []
    });

    Events.insert({
      title: "Looking Forward (& Gala Dinner, Cocktail Hour)",
      speaker: "Melanie Stare, Potash Corporation\nClosing Remarks:\nZenon Kripki, CFES\nKristina Lee, Chair CDE 2015",
      image: "http://wmevents.com/wp-content/uploads/2013/04/Regents-Gala-WM-Events-Header-Image.jpg",
      description: "At 6pm, an opportunity to network and take some photos with your fellow delegates before the banquet begins. Then, at 6:30pm, the final banquet to end the inaugural Conference on Diversity in Engineering featuring a keynote called \"Looking Forward\": a call to action for current engineering students and their future influence by embracing diversity.\nBuses to Waterloo Inn at 4:30pm and 4:45pm",
      startDate: convertToEST(new Date(2015, 10, 15, 18, 00)),
      endDate: convertToEST(new Date(2015, 10, 15, 23, 00)),
      location: "Waterloo Inn",
      attendees: []
    });
  } catch (e) { }
});
