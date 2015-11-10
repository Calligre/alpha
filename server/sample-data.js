Meteor.startup(function() {
  Activities.remove({});
  Activities.insert({
    text: 'CDE 2015 is so cool I love life, the Universe, and everything!!!! #cde2015',
    image: null,
    userAvatar: 'https://avatars1.githubusercontent.com/u/3341822?v=2&s=400',
    userName: 'Kevin James',
    place: 'Waterloo, Ontario',
    date: new Date,
    likes: []
  });
  Activities.insert({
    text: '#cde2015',
    image: '/img/activity/activity-placeholder-strawberry-640x640.jpg',
    userAvatar: 'https://avatars1.githubusercontent.com/u/3341822?v=2&s=400',
    userName: 'Kevin James',
    place: 'Waterloo, Ontario',
    date: new Date,
    likes: []
  });

  Events.remove({});
  Events.insert({
    title: 'What is software?',
    speaker: 'Clarisse Schneider',
    image: '/img/activity/activity-placeholder-strawberry-640x640.jpg',
    description: 'How do you software? Let Clarisse tell you how!',
    location: 'Waterloo, Ontario, CA',
    date: new Date,
    likes: []
  });
});
