'use strict';

// Tracks controller
angular.module('tracks').controller('SearchController', ['$scope', '$http', '$stateParams', '$location', 'Authentication', 'Search', 'apphera',
	function ($scope, $http, $stateParams, $location, Authentication, Search, apphera) {
	    $scope.authentication = Authentication;
	    $scope.tracks = [];
	    $scope.loader = true;
	    $scope.noData = false;
	    $scope.market = 'en-IN';
	    $scope.filteredTracksSearch = [];
	    $scope.totalItems = 0;
	    $scope.currentPage = 0;
	    $scope.setPage = function (pageNo) {
	        $scope.currentPage = pageNo;
	    };

	    $scope.pageChanged = function () {
	        var begin = ($scope.currentPage - 1) * 10;
	        var end = begin + 10;
	        console.log(begin + ' ' + end);
	        $scope.filteredTracksSearch = $scope.tracks.slice(begin, end);

	    };
	    // Find a list of Tracks
	    $scope.find = function () {
	        $scope.tracks = [];




            apphera.getTrackResults('search', $stateParams.trackId, $scope.market)
                .then(function(result){
                    $scope.tracks = result.ranks.results;
                    console.log(result);
                    $scope.totalItems = result.length;
                    console.log('length is :' + result.length);
                });

            $scope.loader = false;
            $scope.currentPage = 1;
            $scope.pageChanged();

//            $http.get('/api/tracks/' + $stateParams.trackId + '/search/' + $scope.market).success(function (data) {
//	            if(data){
//	            	$scope.noData = true;
//	            }else{
//	            	$scope.tracks = data.results;
//	            	//console.log(data);
//	            	$scope.totalItems = data.results.length;
//	            }
//	            $scope.loader = false;
//	            $scope.currentPage = 1;
//	            $scope.pageChanged();
//	            console.log($scope.loader);
//	        });
	    };

//	    // Find existing Track
//	    $scope.findOne = function () {
//	        $scope.track = Search.get({
//	            trackId: $stateParams.trackId
//	        });
//	    };
	}
]);