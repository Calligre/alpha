var Twit = Meteor.npmRequire('twit');

var T = new Twit({
  consumer_key: 'iRZeYHBHvcyCqlFWkWdqJw',
  consumer_secret: 'tIuqXo7bfH7YHiCFHVSlhCPLuC0rOiHcbBA5MWRbY',
  access_token: '883440030-HDfCTkgRRICuhvH3dlPNKV1mzzTSv2VtrVEeA2pS',
  access_token_secret: 'kpGiZA3bGmHP4oeRZktklklw6lYxILVoSsRa1JRlixVI7',
  app_only_auth: true
});

var update_activities = function() {
  T.get('search/tweets', { q: '#cde2015', count: 100 },
        Meteor.bindEnvironment(function(err, data, response) {
    _.each(data['statuses'], function(elem) {
      try {
        Activities.insert({
          text: elem['text'],
          image: elem['entities']['media'] ? elem['entities']['media'][0]['media_url'] : null,
          userAvatar: elem['user']['profile_image_url'],
          userName: elem['user']['name'],
          place: elem['user']['location'],
          date: elem['created_at']
        });
      } catch (e) { }
    });
  }));
}

var cron = new Meteor.Cron({
  events: {
    "* * * * *": update_activities,
  }
});
