Events = new Mongo.Collection('events');

Events.allow({
  update: function(userId, doc, fieldNames, modifier) {
    return fieldNames[0] == 'attendees';
  }
});
