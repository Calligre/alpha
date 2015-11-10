Activities = new Mongo.Collection('activities');

Activities.allow({
  insert: function(userId, doc) {
    return doc.userId === userId;
  }
});

Meteor.methods({
  createActivity: function(activity, tweet) {
    activity.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    activity.userName = Meteor.user().name;
    activity.place = 'Waterloo, Ontario';
    activity.date = new Date();
    activity.likes = [];

    var id = Activities.insert(activity);

    if (tweet) {
      tweetActivity(activity);
    }

    return id;
  },

  likeActivity: function(id){
    Activities.update({_id: id}, {$addToSet: {likes: Meteor.userId()}});
  },

  unlikeActivity: function(id){
    Activities.update({_id: id}, {$pull: {likes: Meteor.userId()}});
  }
});

var twitterOauth = function(options) {
  var config = Meteor.settings.twitter
  var userConfig = Meteor.user().services.twitter;

  return {
    consumer_key: config.consumerKey,
    consumer_secret: config.secret,
    token: userConfig.accessToken,
    token_secret: userConfig.accessTokenSecret
  };
}

var tweetActivity = function(activity) {
  if (Meteor.isClient) {
    return;
  }

  // creates the tweet text, optionally truncating to fit the appended text
  function appendTweet(text, append) {
    var MAX = 117; // Max size of tweet with image attached

    if ((text + append).length > MAX) {
      return text.substring(0, (MAX - append.length - 3)) + '...' + append;
    } else {
      return text + append;
    }
  }

  // we need to strip the "data:image/jpeg;base64," bit off the data url
  var image = activity.image.replace(/^data.*base64,/, '');

  var response = HTTP.post(
    'https://upload.twitter.com/1.1/media/upload.json', {
      params: { media: image },
      npmRequestOptions: { oauth: twitterOauth() }
    }
  );

  if (response.statusCode !== 200) {
    throw new Meteor.Error(500, 'Unable to post image to twitter');
  }

  if (!response.data) {
    throw new Meteor.Error(500, 'Did not receive attachment from twitter');
  }

  var attachment = response.data;

  response = HTTP.post(
    'https://api.twitter.com/1.1/statuses/update.json', {
      params: {
        status: appendTweet(activity.text, ' #cde2015'),
        media_ids: attachment.media_id_string
      },
      npmRequestOptions: { oauth: twitterOauth() }
    }
  );

  if (response.statusCode !== 200) {
    throw new Meteor.Error(500, 'Unable to create tweet');
  }
}
