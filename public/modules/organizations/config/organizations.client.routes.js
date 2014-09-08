'use strict';

//Setting up route
angular.module('organizations').config(['$stateProvider',
	function($stateProvider) {
		// Organizations state routing
		$stateProvider.
		state('listOrganizations', {
			url: '/organizations',
			templateUrl: 'modules/organizations/views/list-organizations.client.view.html'
		}).
		state('createOrganization', {
			url: '/organizations/create',
			templateUrl: 'modules/organizations/views/create-organization.client.view.html'
		}).
		state('viewOrganization', {
			url: '/organizations/:organizationId',
			templateUrl: 'modules/organizations/views/users.client.view.html'
		}).
		state('editOrganization', {
			url: '/organizations/:organizationId/edit',
			templateUrl: 'modules/organizations/views/edit-organization.client.view.html'
		});
	}
]);