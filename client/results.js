Template.resultuser1.helpers({
    mingle: function() {
    	var cursor = Profiles.find().fetch();
        // console.log(cursor.slice(0,4)[0]);
        return cursor.slice(0,4)[0];
    }
});

Template.resultuser2.helpers({
    mingle: function() {
    	var cursor = Profiles.find().fetch();
        // console.log(cursor.slice(0,4)[0]);
        return cursor.slice(0,4)[1];
    }
});

Template.resultuser3.helpers({
    mingle: function() {
    	var cursor = Profiles.find().fetch();
        // console.log(cursor.slice(0,4)[0]);
        return cursor.slice(0,4)[2];
    }
});

Template.resultuser4.helpers({
    mingle: function() {
    	var cursor = Profiles.find().fetch();
        //console.log(cursor.slice(0,4));
        return cursor.slice(0,4)[3];
    }
});

Template.results.events({
    'click .profile-button': function(){
  	//console.log(Meteor.userId());
    	Router.go('profile', {userId: Meteor.userId()});
  }
});