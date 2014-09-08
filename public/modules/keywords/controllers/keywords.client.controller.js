'use strict';

// Keywords controller
angular.module('keywords').controller('KeywordsController', ['$scope', '$http', '$stateParams', '$location', 'Authentication', 'Keywords','apphera',
	function ($scope, $http, $stateParams, $location, Authentication, Keywords, apphera) {
	    $scope.authentication = Authentication;
	    $scope.keywords = '';
	    $scope.markets = [];


	    $scope.tracks = [

            { name: 'facebook', maker: 'Facebook', ticked: false },
            { name: 'search', maker: 'Search', ticked: false },
            { name: 'youtube', maker: 'Youtube', ticked: false },
            { name: 'instagram', maker: 'Instagram', ticked: false },
            { name: 'twitter', maker: 'Twitter', ticked: false }

        ];

	    $scope.selectedMarkets = [];
	    $scope.filteredKeywords = [];
	    $scope.selectedTracks = [];
	    $scope.loader = true;
	    $scope.name = '';




	    // Create new Keyword
	    $scope.create = function () {

	        angular.forEach($scope.markets, function (data) {
	            if (data.ticked === true)
	                $scope.selectedMarkets.push(data.value);
	        });
	        // Create new Keyword object
	        angular.forEach($scope.tracks, function (value, key) {
	            if (value.ticked === true) {
	                $scope.selectedTracks.push(value.name);
	            }
	        });
	        //console.log($scope.selectedTracks);
	        //return false;
	        var keyword = new Keywords({
	            keyword: {
	                name: $scope.name,
	                tracks: $scope.selectedTracks,
	                markets: $scope.selectedMarkets
	            }
	        });
	        // Redirect after save
	        apphera.createKeyword(keyword)
                .then(function(response){
	            location.reload();
	        }, function (errorResponse) {
	            $scope.error = errorResponse.message;
	        });

	        // Clear form fields
	        //this.name = '';
	        //			$http.post('http://localhost:3000/api/keywords')
	        //			.success(function(data){
	        //				$location.path('keywords');
	        //			});
	    };
        //open add keyword box
        $scope.openAddKeywordModal = function () {
            angular.element('#saveKeyword').modal();
        };
        // Remove existing Keyword
        $scope.remove = function (keyword) {
            if (keyword) {
                keyword.$remove();

                for (var i in $scope.keywords) {
                    if ($scope.keywords[i] === keyword) {
                        $scope.keywords.splice(i, 1);
                    }
                }
            } else {
                $scope.keyword.$remove(function () {
                    $location.path('keywords');
                });
            }
        };

	    // Update existing Keyword
	    $scope.update = function () {
	        var keyword = $scope.keyword;

	        keyword.$update(function () {
	            $location.path('keywords' + keyword._id);
	        }, function (errorResponse) {
	            $scope.error = errorResponse.data.message;
	        });
	    };

	    // Find a list of Keywords
	    $scope.find = function () {
	        apphera.getKeywords()
                .then(function(response){
                    $scope.keywords = response;
                });

	        apphera.getMarkets()
                .then(function (data) {
	            setMarkets(data);
	            $scope.loader = false;
	        });
	    };

	    // Find existing Keyword
	    $scope.findOne = function () {
	        $scope.keyword = Keywords.get({
	            keywordId: $stateParams.keywordId
	        });
	    };

	    function setMarkets(data) {
	        angular.forEach(data, function (data) {
	            $scope.markets.push({ name: data.language, value: data.name, ticked: false });
	        });
	    }

	}
]);