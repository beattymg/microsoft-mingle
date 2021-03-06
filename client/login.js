import { Session } from 'meteor/session'

if (Meteor.isClient){
	Template.login.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#login-email').value;
			var passwordVar = template.find('#login-password').value;
			Meteor.loginWithPassword(emailVar, passwordVar);
			if (Meteor.user() !== null) {
				Router.go('results');
			}
		}
	});
}