Template.profile.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('profiles');
    this.profile = Profiles.findOne();
});


Template.profile.helpers({
    profile: function() {
        // return Profiles.find({_id: this._id});
        return this.profile;
    }
    // fullname: function () { return profile.fullname },
    // organization: function () { return profile.organization }
});