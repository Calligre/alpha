Template.eventList.events({
  'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  }
});

Template.eventList.helpers({
  dates: function() {
    return _.uniq(Events.find({},{}).fetch(), false, function(event) {return $.format.date(event.startDate.getTime(), "yyyy/MM/dd")});
  },
  events: function(date) {
    var year = $.format.date(date.getTime(), "yyyy");
    var month = parseInt($.format.date(date.getTime(), "MM")) - 1;
    var day = $.format.date(date.getTime(), "dd");
    var fromDate = new Date(year, month, day);
    var toDate = new Date(year, month, parseInt(day) + 1)

    if (Session.get('isAllSelected')) {
      return Events.find({startDate: {$gte: fromDate, $lte: toDate}}, {sort: {startDate: 1, endDate: 1, title: 1}});
    }
    return Events.find({attendees: Meteor.userId(), startDate: {$gte: fromDate, $lte: toDate}}, {sort: {startDate: 1, endDate: 1, title: 1}});
  },
  formatStartDate: function(date) {
    return $.format.date(date.getTime(), "ddd, MMM dd");
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
