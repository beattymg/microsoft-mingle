Router.route('/', {
    template: 'main',
    name: 'main'
});

Router.route('/login', {
    template: 'login'
});


Router.route('/profile/:userId', {
    name: 'profile',
    data: function() { return Profiles.findOne(this.params.userId); }
});


Router.route('/createprofile', {
    template: 'insertUser'
});

Router.route('/register', {
    template: 'register'
});

