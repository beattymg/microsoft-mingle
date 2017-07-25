Template.profile.onCreated(function bodyOnCreated() {
});

Template.profile.helpers({
    profile: function() {
        return Profiles.findOne();
    }
});