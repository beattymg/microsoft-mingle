Template.insertUser.events({
    'submit form': function(e) {
        e.preventDefault();

        Session.set('userId', "matthew@gmail.com");

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
            userId: Session.get('userId')
        };

        console.log($(e.target).find('[name=fullname]').val(),
                    $(e.target).find('[name=headshot]').val(),
                    $(e.target).find('[name=organization]').val(),
                    $(e.target).find('[name=team]').val(),
                    $(e.target).find('[name=role]').val(),
                    Session.get('userId'));

        Router.go('profile', {_id: Session.get('userId')});
    }
});