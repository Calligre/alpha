Template.eventItem.helpers({
  attending: function() {
    var match = Events.findOne(this._id);
    if (!match) {
        console.error("Event not found! " + this);
    }

    return match.attendees.indexOf(Meteor.userId()) !== -1;
  },
  path: function () {
    return Router.path('eventPage', this.event);
  },
  date: function() {
    return $.format.date(this.startDate.getTime(), "ddd");
  },

  startDate: function(){
    return $.format.date(this.startDate.getTime(), "h:mmp");
  },

  endDate: function(){
    return $.format.date(this.endDate.getTime(), "h:mmp");
  }
});

Template.eventItem.events({
  'click .js-add-to-agenda': function(event) {
    Events.update({_id: this._id}, {$addToSet: {'attendees': Meteor.userId()}});
  },
  'click .js-remove-from-agenda': function(event) {
    Events.update({_id: this._id}, {$pull: {'attendees': Meteor.userId()}});
    event.stopPropagation();
  },
});
