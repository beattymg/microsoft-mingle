Template.updateProfile.onCreated(function () {
    $(document).ready(function() {
        $('#orgSelect1').val("OPG");
    });
    console.log("test");
});

Template.updateProfile.rendered = function() {
    $('#orgSelect1').val("OPG");
};

$('#orgSelect1').val("OPG");

Template.updateProfile.helpers({
    profile: function() {
        // console.log(Meteor.userId());
        // console.log("meteor userId " + Meteor.userId());
        // var prof = Profiles.find({ 'userId': Meteor.userId() }).fetch();
        // console.log(prof);
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

        Profiles.update({_id: Meteor.userId()},
            {$set: {fullname : $(e.target).find('[name=fullname]').val(),
                    headshot : $(e.target).find('[name=headshot]').val(),
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
                    }
            });
        // Profiles.insert(profile);
        Router.go('profile', {userId: Meteor.userId()});
    }
});