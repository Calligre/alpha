var Twit = Meteor.npmRequire('twit');

var T = new Twit({
  consumer_key: Meteor.settings.twitter.consumerKey,
  consumer_secret: Meteor.settings.twitter.secret,
  access_token: Meteor.settings.twitter.accessToken,
  access_token_secret: Meteor.settings.twitter.accessTokenSecret,
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
          date: elem['created_at'],
          likes: []
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
