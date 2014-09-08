'use strict';

// Tracks controller
angular.module('tracks').controller('youtubeController', ['$scope', '$http', '$stateParams', '$location', 'Authentication', 'Search',
	function ($scope, $http, $stateParams, $location, Authentication, Search) {
	    $scope.authentication = Authentication;
	    $scope.tracks = [];
	    $scope.loader = true;
	    $scope.noData = false;
	    $scope.youtubes = [];
	    $scope.url = '/api/tracks/'+$stateParams.trackId+'/youtube';

	    // $scope.find = function () {
	    //     $http.get('/api/tracks/' + $stateParams.trackId + '/youtube').success(function (data) {
	    //         $scope.tracks = data;
	    //         $scope.loader = false;
	    //         $scope.totalItems = data.length;
	    //         $scope.currentPage = 1;
	    //         $scope.pageChanged();
	    //         if (data.length <= 0) {
	    //             $scope.noData = true;

	    //         }

	    //     });
	    // };

	    // Find existing Track
	    $scope.findOne = function () {
	        $scope.track = Search.get({
	            trackId: $stateParams.trackId
	        });
	    };
	}
]);