'use strict';

(function() {
	// Keywords Controller Spec
	describe('Keywords Controller Tests', function() {
		// Initialize global variables
		var KeywordsController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Keywords controller.
			KeywordsController = $controller('KeywordsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Keyword object fetched from XHR', inject(function(Keywords) {
			// Create sample Keyword using the Keywords service
			var sampleKeyword = new Keywords({
				name: 'New Keyword'
			});

			// Create a sample Keywords array that includes the new Keyword
			var sampleKeywords = [sampleKeyword];

			// Set GET response
			$httpBackend.expectGET('keywords').respond(sampleKeywords);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.keywords).toEqualData(sampleKeywords);
		}));

		it('$scope.findOne() should create an array with one Keyword object fetched from XHR using a keywordId URL parameter', inject(function(Keywords) {
			// Define a sample Keyword object
			var sampleKeyword = new Keywords({
				name: 'New Keyword'
			});

			// Set the URL parameter
			$stateParams.keywordId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/keywords\/([0-9a-fA-F]{24})$/).respond(sampleKeyword);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.keyword).toEqualData(sampleKeyword);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Keywords) {
			// Create a sample Keyword object
			var sampleKeywordPostData = new Keywords({
				name: 'New Keyword'
			});

			// Create a sample Keyword response
			var sampleKeywordResponse = new Keywords({
				_id: '525cf20451979dea2c000001',
				name: 'New Keyword'
			});

			// Fixture mock form input values
			scope.name = 'New Keyword';

			// Set POST response
			$httpBackend.expectPOST('keywords', sampleKeywordPostData).respond(sampleKeywordResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Keyword was created
			expect($location.path()).toBe('/keywords/' + sampleKeywordResponse._id);
		}));

		it('$scope.update() should update a valid Keyword', inject(function(Keywords) {
			// Define a sample Keyword put data
			var sampleKeywordPutData = new Keywords({
				_id: '525cf20451979dea2c000001',
				name: 'New Keyword'
			});

			// Mock Keyword in scope
			scope.keyword = sampleKeywordPutData;

			// Set PUT response
			$httpBackend.expectPUT(/keywords\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/keywords/' + sampleKeywordPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid keywordId and remove the Keyword from the scope', inject(function(Keywords) {
			// Create new Keyword object
			var sampleKeyword = new Keywords({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Keywords array and include the Keyword
			scope.keywords = [sampleKeyword];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/keywords\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleKeyword);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.keywords.length).toBe(0);
		}));
	});
}());