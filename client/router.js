Router.route('/', {
    template: 'main',
    name: 'main'
});

Router.route('/login', {
    template: 'login'
});

Router.route('/profile', {
    template: 'profile'
});

Router.route('/createprofile', {name: 'insertUser'});

