Template.resultuser1.helpers({
    mingle: function() {
    	var current = Profiles.find({"userId": Meteor.userId()}).fetch()[0].orgSelect1;
    	var cursor = Profiles.find({"organization": current}).fetch();
        console.log(cursor);
        return cursor.slice(0,4)[0];
    }
});

Template.resultuser2.helpers({
    mingle: function() {
    	var current = Profiles.find({"userId": Meteor.userId()}).fetch()[0].orgSelect1;
    	var cursor = Profiles.find({"organization": current}).fetch();
        return cursor.slice(0,4)[1];
    }
});

Template.resultuser3.helpers({
    mingle: function() {
    	var current = Profiles.find({"userId": Meteor.userId()}).fetch()[0].orgSelect2;
    	var cursor = Profiles.find({"organization": current}).fetch();
        return cursor.slice(0,4)[0];
    }
});

Template.resultuser4.helpers({
    mingle: function() {
    	var current = Profiles.find({"userId": Meteor.userId()}).fetch()[0].orgSelect3;
    	var cursor = Profiles.find({"organization": current}).fetch();
        return cursor.slice(0,4)[0];
    }
});

Template.results.events({
    'click .profile-button': function(){
    	Router.go('profile', {userId: Meteor.userId()});
  }
});