Template.profile.helpers({
    profile: function() {
        // console.log(Meteor.userId());
        // console.log("meteor userId " + Meteor.userId());
        // var prof = Profiles.find({ 'userId': Meteor.userId() }).fetch();
        // console.log(prof);
        return Profiles.findOne({ 'userId': Meteor.userId() });
    }
});


Template.profile.events({
    'click .update-profile-btn': function(event){
        event.preventDefault();
        Router.go('updateProfile', {userId: Meteor.userId()});
    }
});

Template.dashboard.events({
	'click .logout': function(event){
		event.preventDefault();
		Meteor.logout();
		Router.go('login');
	}
});