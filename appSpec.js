
describe('optIn', function() {

	var scope,
		img,
		html,
		compiled,
		element;

	beforeEach(module('SignupForm'));
	beforeEach(module("signup.html"));
	beforeEach(inject(function($rootScope, $compile) {

		scope = $rootScope.$new(); // why rootScope?
		html = '<opt-in><div class="brand-logo"></opt-in>';
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();

	}));

	it('should render the html partial', function() {
		expect(element.find('input').length).toBe(4);
		// transcluded div included
		expect(element.find('div').length).toBe(2);
	});
});