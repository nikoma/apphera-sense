'use strict';

//Setting up route
angular.module('reviews').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Reviews state routing
        $urlRouterProvider.otherwise('/reviews/0');
		$stateProvider.
		state('reviews', {
            url: '/reviews/:organizationId',
			templateUrl: 'modules/reviews/views/reviews.client.view.html',
                controller: function ($stateParams) {
                    console.log($stateParams);
		}});
	}
]);