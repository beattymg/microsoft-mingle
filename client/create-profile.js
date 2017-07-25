Template.insertUser.events({
    'submit form': function(e) {
        e.preventDefault();

        var profile = {
            fullname: $(e.target).find('[name=fullname]').val(),
            headshot: $(e.target).find('[name=headshot]').val(),
            organization: $(e.target).find('[name=organization]').val(),
            team: $(e.target).find('[name=team]').val(),
            role: $(e.target).find('[name=role]').val()
        };

        console.log($(e.target).find('[name=fullname]').val(),
                    $(e.target).find('[name=headshot]').val(),
                    $(e.target).find('[name=fullname]').val(),
                    $(e.target).find('[name=headshot]').val(),
                    $(e.target).find('[name=headshot]').val());


        profile._id = Profiles.insert(profile);
        Router.go('profile', {_id: profile._id});
        // Router.go('profile');



    }
});