Template.insertUser.events({
    'submit form': function(e) {
        e.preventDefault();

        var user = {
            fullname: $(e.target).find('[name=fullname]').val(),
            job: $(e.target).find('[name=job]').val()
        };

        post._id = Users.insert(user);
        Router.go('main');
    }
});