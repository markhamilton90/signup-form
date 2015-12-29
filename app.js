
var app = angular.module('SignupForm', []);

app.directive('optIn', function() {
	return {
		restrict: 'E',
		templateUrl: 'signup.html',
		transclude: true
	}
});