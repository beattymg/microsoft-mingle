Template.profile.helpers({
    profile: function() {
        // Session.set('userId', "testing1@google.com");
        console.log("session userid is " + Session.get('userId'));
        var prof = Profiles.find({ 'userId': Session.get('userId') }).fetch();
        console.log(prof);
        // return Profiles.find({ 'userId': Session.get('userId') }).fetch();
        return Profiles.findOne({ 'userId': Session.get('userId') });
        // return Profiles.findOne();
    }
});