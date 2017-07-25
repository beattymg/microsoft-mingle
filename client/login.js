if (Meteor.isClient){
	Template.login.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#login-email').value;
			var passwordVar = template.find('#login-password').value;
			Meteor.loginWithPassword(emailVar, passwordVar);
		}
	});
	Template.register.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#email').value;
			var passwordVar = template.find('#password').value;
			Accounts.createUser({
				email: emailVar,
				password: passwordVar
			});
		}
	});
	Template.dashboard.events({
		'click .logout': function(event){
			event.preventDefault();
			Meteor.logout();
		}
	});
}