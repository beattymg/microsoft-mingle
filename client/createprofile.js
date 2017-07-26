Template.insertUser.events({
    'submit form': function(e) {
        e.preventDefault();

        var profile = {
            fullname: $(e.target).find('[name=fullname]').val(),
            headshot: $(e.target).find('[name=headshot]').val(),
            organization: $(e.target).find('[name=organization]').val(),
            team: $(e.target).find('[name=team]').val(),
            role: $(e.target).find('[name=role]').val(),
            age: $(e.target).find('[name=age]').val(),
            orgSelect1: $('#orgSelect1').find(":selected").text(),
            orgSelect2: $('#orgSelect2').find(":selected").text(),
            orgSelect3: $('#orgSelect3').find(":selected").text(),
            roleSelect1: $('#roleSelect1').find(":selected").text(),
            roleSelect2: $('#roleSelect1').find(":selected").text(),
            roleSelect3: $('#roleSelect1').find(":selected").text(),
            userId: Meteor.userId()
        };


        console.log($(e.target).find('[name=fullname]').val(),
                    $(e.target).find('[name=headshot]').val(),
                    $(e.target).find('[name=organization]').val(),
                    $(e.target).find('[name=team]').val(),
                    $(e.target).find('[name=role]').val(),
                    Meteor.userId());

        profile._id = Meteor.userId();
        Profiles.insert(profile);

        Router.go('profile', {userId: Meteor.userId()});
    }
});