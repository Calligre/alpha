// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/meteor/wiki/Configuring-Twitter-in-Local-Market
if (typeof Meteor.settings === 'undefined') {
  Meteor.settings = {};
}

_.defaults(Meteor.settings, {
  twitter: {
    consumerKey: "jFzDvBaf3rxZJxiXADuww4Ali",
    secret: "GDPFW3fo3hwrUHu5aSyCQUMM5B1Izs1ViBqKlA0lRCnPpxzGm0"
  }
});

ServiceConfiguration.configurations.upsert(
  {
    service: "twitter"
  },
  {
    $set: {
      consumerKey: Meteor.settings.twitter.consumerKey,
      secret: Meteor.settings.twitter.secret
    }
  }
);
