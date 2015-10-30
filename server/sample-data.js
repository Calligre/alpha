Meteor.startup(function() {
  if (Activities.find().count() === 0) {
    Activities.insert({
      text: 'CDE 2015 is so cool I love life, the Universe, and everything!!!! #cde2015',
      image: null,
      userAvatar: 'https://avatars1.githubusercontent.com/u/3341822?v=2&s=400',
      userName: 'Kevin James',
      place: 'Waterloo, Ontario',
      date: new Date
    });
    Activities.insert({
      text: '#cde2015',
      image: '/img/activity/activity-placeholder-strawberry-640x640.jpg',
      userAvatar: 'https://avatars1.githubusercontent.com/u/3341822?v=2&s=400',
      userName: 'Kevin James',
      place: 'Waterloo, Ontario',
      date: new Date
    });
  }
});
