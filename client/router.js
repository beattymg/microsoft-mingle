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

Router.route('/updateprofile', {
    template: 'updateProfile'
});

Router.route('/results', {
    template: 'results',
    data: function() { return Profiles.find().fetch().slice(0,4); }
});