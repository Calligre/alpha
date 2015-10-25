if(Meteor.isClient){
    Template.list.userInCollection = function(){
        return Meteor.users.find();
    }
}
