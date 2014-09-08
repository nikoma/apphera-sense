'use strict';
// Check if the user is connected
//================================================

//Setting up route
angular.module('keywords').config(['$stateProvider',
	function($stateProvider) {
		// Keywords state routing
		$stateProvider.
		state('listKeywords', {
			url: '/keywords',
			templateUrl: 'modules/keywords/views/list-keywords.client.view.html',

		}).
		state('createKeyword', {
			url: '/keywords/create',
			templateUrl: 'modules/keywords/views/create-keyword.client.view.html'
		}).
		state('viewKeyword', {
			url: '/keywords/:keywordId',
			templateUrl: 'modules/keywords/views/view-keyword.client.view.html'
		}).
		state('editKeyword', {
			url: '/keywords/:keywordId/edit',
			templateUrl: 'modules/keywords/views/edit-keyword.client.view.html'
		});
	}
]);