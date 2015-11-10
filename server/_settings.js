if (typeof Meteor.settings === 'undefined') {
  Meteor.settings = {};
}

ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: Meteor.settings.facebook.consumerKey,
      secret: Meteor.settings.facebook.secret
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "linkedin" },
  {
    $set: {
      clientId: Meteor.settings.linkedin.consumerKey,
      secret: Meteor.settings.linkedin.secret
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  {
    $set: {
      consumerKey: Meteor.settings.twitter.consumerKey,
      secret: Meteor.settings.twitter.secret
    }
  }
);
