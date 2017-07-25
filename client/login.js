import { Session } from 'meteor/session'

if (Meteor.isClient){
	Template.login.events({
		'submit form': function(event, template){
			event.preventDefault();
			var emailVar = template.find('#login-email').value;
			var passwordVar = template.find('#login-password').value;
			Meteor.loginWithPassword(emailVar, passwordVar);
			Session.set('userId', emailVar);
		}
	});

	Template.dashboard.events({
		'click .logout': function(event){
			event.preventDefault();
			Meteor.logout();
		}
	});
}