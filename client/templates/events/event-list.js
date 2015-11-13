Template.eventList.events({
  'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  }
});

Template.eventList.helpers({
  events: function() {
    if (Session.get('isAllSelected')) {
      return Events.find({}, {sort: {date: -1}});
    }
    return Events.find({attendees: Meteor.userId()}, {sort: {date: -1}});
  },
  isReady: function() {
    return Router.current().eventsSubscription.ready();
  }
});

Template.eventList.created = function() {
  Session.set('isAllSelected', true);
}

Template.eventList.events({
  'click #all': function(){
    var all = $('#all');
    var my = $('#agenda');
    if (!all.hasClass('selected')) { 
      all.addClass('selected');
      my.removeClass('selected');
      Session.set('isAllSelected', true);
    }
  },
  'click #agenda': function(){
    var all = $('#all');
    var my = $('#agenda');
    if (!my.hasClass('selected')) { 
      my.addClass('selected');
      all.removeClass('selected');
      Session.set('isAllSelected', false);
    }
  },
});
