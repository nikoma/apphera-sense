'use strict';

(function() {
	// Organizations Controller Spec
	describe('Organizations Controller Tests', function() {
		// Initialize global variables
		var OrganizationsController,
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

			// Initialize the Organizations controller.
			OrganizationsController = $controller('OrganizationsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Organization object fetched from XHR', inject(function(Organizations) {
			// Create sample Organization using the Organizations service
			var sampleOrganization = new Organizations({
				name: 'New Organization'
			});

			// Create a sample Organizations array that includes the new Organization
			var sampleOrganizations = [sampleOrganization];

			// Set GET response
			$httpBackend.expectGET('organizations').respond(sampleOrganizations);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.organizations).toEqualData(sampleOrganizations);
		}));

		it('$scope.findOne() should create an array with one Organization object fetched from XHR using a organizationId URL parameter', inject(function(Organizations) {
			// Define a sample Organization object
			var sampleOrganization = new Organizations({
				name: 'New Organization'
			});

			// Set the URL parameter
			$stateParams.organizationId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/organizations\/([0-9a-fA-F]{24})$/).respond(sampleOrganization);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.organization).toEqualData(sampleOrganization);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Organizations) {
			// Create a sample Organization object
			var sampleOrganizationPostData = new Organizations({
				name: 'New Organization'
			});

			// Create a sample Organization response
			var sampleOrganizationResponse = new Organizations({
				_id: '525cf20451979dea2c000001',
				name: 'New Organization'
			});

			// Fixture mock form input values
			scope.name = 'New Organization';

			// Set POST response
			$httpBackend.expectPOST('organizations', sampleOrganizationPostData).respond(sampleOrganizationResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Organization was created
			expect($location.path()).toBe('/organizations/' + sampleOrganizationResponse._id);
		}));

		it('$scope.update() should update a valid Organization', inject(function(Organizations) {
			// Define a sample Organization put data
			var sampleOrganizationPutData = new Organizations({
				_id: '525cf20451979dea2c000001',
				name: 'New Organization'
			});

			// Mock Organization in scope
			scope.organization = sampleOrganizationPutData;

			// Set PUT response
			$httpBackend.expectPUT(/organizations\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/organizations/' + sampleOrganizationPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid organizationId and remove the Organization from the scope', inject(function(Organizations) {
			// Create new Organization object
			var sampleOrganization = new Organizations({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Organizations array and include the Organization
			scope.organizations = [sampleOrganization];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/organizations\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleOrganization);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.organizations.length).toBe(0);
		}));
	});
}());