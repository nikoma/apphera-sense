'use strict';

//Tracks service used to communicate Tracks REST endpoints TODO: Add keyword ID here
angular.module('tracks').factory('Search', ['$resource',
	function($resource) {
		return $resource('/api/tracks/633/search', { trackId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);