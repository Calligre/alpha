Template.profilePage.helpers({
    data: function() {
        var matches = Meteor.users.find({_id: Router.current().options.params.id}).fetch();
        if (matches.length != 1) {
            console.error("Holy fuck how did you do that?")
        }
        return matches[0];
    },
    isReady: function() {
        return Router.current().userSubscription.ready();
    }
});
