Template.profilePage.helpers({
    data: function() {
        var matches = Meteor.users.findOne(Router.current().options.params.id);
        if (!matches) {
            console.error("Profile not found! " + Router.current().options.params.id);
        }
        return matches;
    },
    isReady: function() {
        return Router.current().userSubscription.ready();
    },
    place: function(){
        var idx;
        Meteor.users.find({}, {sort: {points: 1}}).forEach(function(item, ind){
           if(item._id == Meteor.userId()){ idx = ind; return true;};
        });
        return idx + 1;
  }
});
