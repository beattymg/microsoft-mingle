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
    data: function() { return Profiles.findOne(this.params._id); }
});


Router.route('/create-profile', {
    template: 'insertUser'
});

Router.route('/register', {
    template: 'register'
});

