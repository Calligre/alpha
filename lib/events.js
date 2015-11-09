Events = new Mongo.Collection('events');

Events.allow({
  update: function(userId, doc, fieldNames, modifier) {
    console.log(fieldNames[0]);
    return fieldNames[0] == 'attendees';
  }
});
