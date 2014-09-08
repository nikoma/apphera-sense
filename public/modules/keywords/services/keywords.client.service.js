'use strict';

//Keywords service used to communicate Keywords REST endpoints
angular.module('keywords').factory('Keywords', ['$resource',
	function($resource) {
		return $resource('/api/keywords/:keywordId', { keywordId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

