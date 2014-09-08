'use strict';

(function() {
	// Tracks Controller Spec
	describe('Tracks Controller Tests', function() {
		// Initialize global variables
		var TracksController,
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

			// Initialize the Tracks controller.
			TracksController = $controller('TracksController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Track object fetched from XHR', inject(function(Tracks) {
			// Create sample Track using the Tracks service
			var sampleTrack = new Tracks({
				name: 'New Track'
			});

			// Create a sample Tracks array that includes the new Track
			var sampleTracks = [sampleTrack];

			// Set GET response
			$httpBackend.expectGET('tracks').respond(sampleTracks);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.tracks).toEqualData(sampleTracks);
		}));

		it('$scope.findOne() should create an array with one Track object fetched from XHR using a trackId URL parameter', inject(function(Tracks) {
			// Define a sample Track object
			var sampleTrack = new Tracks({
				name: 'New Track'
			});

			// Set the URL parameter
			$stateParams.trackId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/tracks\/([0-9a-fA-F]{24})$/).respond(sampleTrack);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.track).toEqualData(sampleTrack);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Tracks) {
			// Create a sample Track object
			var sampleTrackPostData = new Tracks({
				name: 'New Track'
			});

			// Create a sample Track response
			var sampleTrackResponse = new Tracks({
				_id: '525cf20451979dea2c000001',
				name: 'New Track'
			});

			// Fixture mock form input values
			scope.name = 'New Track';

			// Set POST response
			$httpBackend.expectPOST('tracks', sampleTrackPostData).respond(sampleTrackResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Track was created
			expect($location.path()).toBe('/tracks/' + sampleTrackResponse._id);
		}));

		it('$scope.update() should update a valid Track', inject(function(Tracks) {
			// Define a sample Track put data
			var sampleTrackPutData = new Tracks({
				_id: '525cf20451979dea2c000001',
				name: 'New Track'
			});

			// Mock Track in scope
			scope.track = sampleTrackPutData;

			// Set PUT response
			$httpBackend.expectPUT(/tracks\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/tracks/' + sampleTrackPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid trackId and remove the Track from the scope', inject(function(Tracks) {
			// Create new Track object
			var sampleTrack = new Tracks({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Tracks array and include the Track
			scope.tracks = [sampleTrack];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/tracks\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleTrack);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.tracks.length).toBe(0);
		}));
	});
}());