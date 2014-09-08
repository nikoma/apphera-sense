'use strict';

//Tracks service used to communicate Tracks REST endpoints TODO: Add keyword ID here
angular.module('tracks').factory('Youtube', ['$resource',
    function($resource) {
        return $resource('/api/tracks/648/youtube', { trackId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);