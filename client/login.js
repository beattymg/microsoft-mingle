import { Session } from 'meteor/session'

if (Meteor.isClient){
	Template.login.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#login-email').value;
			var passwordVar = template.find('#login-password').value;
			Meteor.loginWithPassword(emailVar, passwordVar);
			console.log(Meteor.user())
			if (Meteor.user() !== null) {
				Router.go('main');
			}
		}
	});
}