if (Meteor.isClient){
	Template.register.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#email').value;
			var passwordVar = template.find('#password').value;
			Accounts.createUser({
				email: emailVar,
				password: passwordVar
			});
            Session.set('userId', emailVar);
            console.log(Session.get('userId'));
            Router.go('createprofile');
		}
	});
}