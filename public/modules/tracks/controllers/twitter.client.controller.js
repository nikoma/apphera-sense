'use strict';

// Tracks controller
angular.module('tracks').controller('twitterController', ['$scope', '$http', '$stateParams', '$location', 'Authentication', 'Search', 'Twitter',
	function ($scope, $http, $stateParams, $location, Authentication, Search) {
	    $scope.authentication = Authentication;
	    $scope.tracks = [];
	    $scope.loader = true;
	    $scope.noData = false;
	    $scope.url = '/api/tracks/'+$stateParams.trackId+'/twitter';
	    $scope.filteredTracksTwitter = [];
	    $scope.test = [];

	    // Find a list of Track



	    $scope.$on('pagination:loadPage', function (event, status, config) {
	        // config contains parameters of the page request
	        console.log(config.url);


	        // status is the HTTP status of the result
	        console.log(status);
	    });



	    // Find existing Track
	    $scope.findOne = function () {
	        $scope.track = Search.get({
	            trackId: $stateParams.trackId
	        });
	    };
	}
]);