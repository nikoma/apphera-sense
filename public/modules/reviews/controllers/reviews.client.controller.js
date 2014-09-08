'use strict';

angular.module('reviews').controller('ReviewsController', ['$scope','$stateParams', '$location', 'apphera',
	function($scope,$stateParams, $location, apphera) {
        $scope.loader = true;

        $scope.review = apphera.getReviews($stateParams.organizationId)
            .then(function(result){
                $scope.reviews = result;
                $scope.loader = false;
            });
        $scope.organizations = apphera.getOrganizations()
            .then(function(result){
                $scope.organizations = result;
            });
	}
]);