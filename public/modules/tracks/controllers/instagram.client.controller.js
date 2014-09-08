'use strict';

// Tracks controller
angular.module('tracks').controller('InstagramController', ['$scope', '$stateParams', '$location', 'Authentication', 'apphera',
    function ($scope, $stateParams, $location, Authentication, apphera) {
        $scope.authentication = Authentication;
        $scope.tracks = [];
        $scope.loader = true;
        $scope.noData = false;
        $scope.url = '/api/tracks/'+$stateParams.trackId+'/instagram';
                
        // Find a list of Tracks
        // $scope.find = function () {
        //     $http.get('/api/tracks/' + $stateParams.trackId + '/instagram').success(function (data) {
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

            $scope.track = apphera.getTrackResults('instagram', $stateParams.trackId)
                .then(function(result){
                    $scope.tracks = result;
                });
        };
    }
]);