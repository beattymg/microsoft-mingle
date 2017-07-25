Router.route('/', {
    template: 'main',
    name: 'main'
});

Router.route('/login', {
    template: 'login'
});

// Router.route('/profile', {
//     template: 'profile',
//     name: 'profile'
// });
// Router.route('/profile/:_id', {
//     template: 'profile',
//     name: 'profile',
//     data: function() { return Profiles.findOne(this.params._id); }
// });

Router.route('/profile/:_id', {
    name: 'profile',
    waitOn: function() {
        return [
            Meteor.subscribe('profiles', this.params._id)
        ];
    },
    data: function() { return Profiles.findOne(this.params._id); }
});


Router.route('/createprofile', {
    template: 'insertUser'
});


