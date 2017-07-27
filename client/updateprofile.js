Template.updateProfile.onCreated(function () {
    var profile = Profiles.findOne({ 'userId': Meteor.userId() });
    console.log(profile);
});

Template.updateProfile.helpers({
    profile: function() {
        return Profiles.findOne({ 'userId': Meteor.userId() });
    }
});

Template.updateProfile.events({
    'submit form': function(e) {
        e.preventDefault();

        console.log($(e.target).find('[name=fullname]').val(),
            $(e.target).find('[name=headshot]').val(),
            $(e.target).find('[name=organization]').val(),
            $(e.target).find('[name=team]').val(),
            $(e.target).find('[name=role]').val(),
            Meteor.userId());

        Profiles.update({'_id': Meteor.userId()},
            {$set: {fullname : $(e.target).find('[name=fullname]').val(),
                    headshot : $(e.target).find('[name=headshot]').val(),
                    organization: $('#organization').find(":selected").text(),
                    team: $(e.target).find('[name=team]').val(),
                    role: $('#role').find(":selected").text(),
                    age: $(e.target).find('[name=age]').val(),
                    orgSelect1: $('#orgSelect1').find(":selected").text(),
                    orgSelect2: $('#orgSelect2').find(":selected").text(),
                    orgSelect3: $('#orgSelect3').find(":selected").text(),
                    roleSelect1: $('#roleSelect1').find(":selected").text(),
                    roleSelect2: $('#roleSelect2').find(":selected").text(),
                    roleSelect3: $('#roleSelect3').find(":selected").text(),
                    }
            });
        Router.go('profile', {userId: Meteor.userId()});
    }
});