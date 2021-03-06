Activities = new Mongo.Collection('activities');

Activities.allow({
  insert: function(userId, doc) {
    return doc.userId === userId;
  }
});

Meteor.methods({
  createActivity: function(activity, tweet, facebook) {
    if ('twitter' in Meteor.user().services) {
      activity.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    } else if ('facebook' in Meteor.user().services) {
      activity.userAvatar = Meteor.user().services.facebook.image_url;
    } else {
      activity.userAvatar = 'http://publications.uew.edu.gh/2015/sites/default/files/default_profile_pic.jpg';
    }

    activity.userName = Meteor.user().name;
    activity.place = 'Waterloo, Ontario';
    activity.date = new Date();
    activity.likes = [];

    var id = null;
    if (tweet) {
      tweetActivity(activity);
    } else {
      id = Activities.insert(activity);
    }

    if (facebook) {
      fbpostActivity(activity);
    }

    if (!this.isSimulation) {
      incrementPoints(5);
    }

    return id;
  },

  likeActivity: function(id) {
    if (!this.isSimulation) {
      incrementPoints(1);
    }

    Activities.update({_id: id}, {$addToSet: {likes: Meteor.userId()}});
  },

  unlikeActivity: function(id) {
    if (!this.isSimulation) {
      incrementPoints(-1);
    }

    Activities.update({_id: id}, {$pull: {likes: Meteor.userId()}});
  }
});

var incrementPoints = function(points_delta) {
    Meteor.users.update(Meteor.userId(), {$inc: {points: points_delta} });
}

if (Meteor.isServer) {
  var facebookOauth = function(options) {
    return Meteor.user().services.facebook.accessToken;
  }

  var twitterOauth = function(options) {
    var config = Meteor.settings.twitter;
    var userConfig = Meteor.user().services.twitter;

    return {
      consumer_key: config.consumerKey,
      consumer_secret: config.secret,
      token: userConfig.accessToken,
      token_secret: userConfig.accessTokenSecret
    };
  }
}

var fbpostActivity = function(activity) {
  if (Meteor.isClient) {
    return;
  }

  var userId = Meteor.user().services.facebook.id;
  var text = activity.text + ' #cde2015';
  var image = activity.image.replace(/^data.*base64,/, '')

  var response = null;
  if (activity.image) {

    var route = 'https://graph.facebook.com/v2.5/' + userId + '/photos';
    parts = {
      message: text,
      access_token: facebookOauth(),
      attachment: {
        contentType: 'image/jpg',
        filename: 'picture.jpg',
        value: CryptoJS.enc.Base64.parse(image)
      }
    }

    var formData = MultipartFormData(parts);

    HTTP.call(
      'POST',
      route,
      {
        content: formData.content,
        headers: formData.headers
      },
      function (error, result) {
        if (error) {
          console.log(error, 'Error sending email.');
        }
      }
    );
  } else {
    var route = 'https://graph.facebook.com/v2.5/' + userId + '/feed';

    response = HTTP.post(
      route, {
        params: {
          message: text,
          access_token: facebookOauth()
        }
      }
    );
  }

  if (!response.id) {
    throw new Meteor.Error(500, 'Did not receive attachment from Facebook');
  }

  if (response.statusCode !== 200) {
    throw new Meteor.Error(500, 'Unable to create Facebook post');
  }
}

var tweetActivity = function(activity) {
  if (Meteor.isClient) {
    return;
  }

  var MAX = activity.image ? 117 : 140;

  // creates the tweet text, optionally truncating to fit the appended text
  function appendTweet(text, append) {
    if ((text + append).length > MAX) {
      return text.substring(0, (MAX - append.length - 3)) + '...' + append;
    } else {
      return text + append;
    }
  }

  var response = null;
  if (activity.image) {
    var image = activity.image.replace(/^data.*base64,/, '');

    response = HTTP.post(
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
  } else {
    response = HTTP.post(
      'https://api.twitter.com/1.1/statuses/update.json', {
        params: {
          status: appendTweet(activity.text, ' #cde2015')
        },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    );
  }

  if (response.statusCode !== 200) {
    throw new Meteor.Error(500, 'Unable to create tweet');
  }
}
