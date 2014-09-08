'use strict';

// Organizations controller
angular.module('organizations').controller('OrganizationsController', ['$scope', '$http', '$stateParams', '$location', 'Authentication', 'Organizations','apphera',
	function ($scope, $http, $stateParams, $location, Authentication, Organizations, apphera) {
        // $scope.authentication = Authentication;
        // $scope.credentials;
        apphera.getCategories()
            .then(function (response) {
                $scope.categories = response;
            });

        apphera.getCountries()
            .then(function (response) {
                $scope.country_codes = response;
            });

        $scope.filteredOrganization = [];
        $scope.totalItems = 0;
        $scope.currentPage = 0;
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;

        };

        $scope.pageChanged = function () {
            var begin = ($scope.currentPage - 1) * 10;
            var end = begin + 10;
            console.log(begin + ' ' + end);
            $scope.filteredOrganization = $scope.organizations.slice(begin, end);

        };
        // // Create new Organization
        $scope.openAddUserModal = function () {
            angular.element('#myModal').modal();
        };
        $scope.openDetailModal = function () {
            angular.element('#UserDetails').modal();
        };
        $scope.saveUser = function () {
            console.log('IN saveuser');
            $http.post('/auth/signup', $scope.credentials).success(function (response) {
                //If successful we assign the response to the global user model
                console.log(response);

                //And redirect to the index page
                //$location.path('/');
            }).error(function (response) {
                $scope.error = response.message;
            });
        };
        // get Organization details
        $scope.openDetailOrganization = function (orgID) {
            $stateParams.organizationId = orgID;
            $scope.findOne();
            angular.element('#OrganizationDetails').modal();
        };
        $scope.create = function () {
            // Create new Organization object

            var organization = new Organizations({
                organization: { // Apphera API requires root object

                    'is_online_business': this.is_online_business,
                    'name': this.name, 'street': this.street,
                    'street2': this.street2,
                    'postalcode': this.postalcode,
                    'city': this.city,
                    'state': this.state,
                    'phone1': this.phone1,
                    'phone2': this.phone2,
                    'url': this.url,
                    'facebook': this.facebook,
                    'twitter': this.twitter,
                    'category_id': this.category,
                    'country_code_id': this.country_code
                }
            });

            // Redirect after save - TODO: Apphera API needs show:id action for this
            organization.$save(function (response) {
                $location.path('/api/organizations/' + response.id);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });

            // Clear form fields
            this.name = ''; // TODO: finish this
        };

        // Remove existing Organization
        $scope.remove = function (organization) {
            if (organization) {
                organization.$remove();

                for (var i in $scope.organizations) {
                    if ($scope.organizations[i] === organization) {
                        $scope.organizations.splice(i, 1);
                    }
                }
            } else {
                $scope.organization.$remove(function () {
                    $location.path('organizations');
                });
            }
        };

        // Update existing Organization
        $scope.update = function () {
            var organization = $scope.organization;

            organization.$update(function () {
                $location.path('/api/organizations/' + organization.id);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };


        $scope.find = apphera.getOrganizations()
            .then(function (result) {
                $scope.organizations = result;
                $scope.totalItems = result.lenght;
                $scope.currentPage = 1;
                $scope.pageChanged();
                $scope.loader = false;
            });


	    // Find existing Organization
	    $scope.findOne = apphera.getOrganization($stateParams.organizationId)
            .then(function(result){
                $scope.organization = result;
            });
	}
]);