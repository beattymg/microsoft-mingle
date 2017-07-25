Template.profile.helpers({
    profile: function() {
        // console.log(Meteor.userId());
        // console.log("meteor userId " + Meteor.userId());
        // var prof = Profiles.find({ 'userId': Meteor.userId() }).fetch();
        // console.log(prof);
        return Profiles.findOne({ 'userId': Meteor.userId() });
    }
});