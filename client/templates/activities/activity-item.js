Template.activityItem.onRendered(function() {
  var self = this;

  // If the activity is in a list, scroll it into view. Note, we can't just use
  // element.scrollIntoView() because it attempts to scroll in the X direction
  // messing up our animations
  if (Router.current().params.activityId === self.data._id) {
    var $activity = $(self.firstNode);
    var $parent = $(self.firstNode).closest('.content-scrollable');

    var top = $activity.offset().top;
    var parentTop = $parent.offset().top;

    $parent.scrollTop(top - parentTop);
  }
});

Template.activityItem.helpers({
  formattedDate: function(){
    return $.format.date(this.date.getTime(), "ddd h:mmp");
  },
  likeCount: function(){
    return this.likes.length;
  },
  isLiked: function(){
    var match = _.find(this.likes, function(d) {
      return d = Meteor.userId();
    });

    return !_.isUndefined(match);
  }
});

Template.activityItem.events({
  'click .activity-like': function() {
    Meteor.call('likeActivity', this._id);
  },
  'click .activity-unlike': function() {
    Meteor.call('unlikeActivity', this._id);
  }
});
