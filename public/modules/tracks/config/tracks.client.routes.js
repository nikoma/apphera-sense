'use strict';

//Setting up route
angular.module('tracks').config(['$stateProvider',
	function ($stateProvider) {
	    // Tracks state routing
	    $stateProvider.
	    // state('listTracks', {
	    // 	url: '/tracks',
	    // 	templateUrl: 'modules/tracks/views/list-tracks.client.view.html'
	    // }).
		state('createTrack', {
		    url: '/tracks/create',
		    templateUrl: 'modules/tracks/views/create-track.client.view.html'
		}).
		state('listTracksSearch', {
		    url: '/tracks/search/:trackId',
		    templateUrl: 'modules/tracks/views/list-searches.client.view.html'
		}).
        //vishal
	    state('listTracksYoutube', {
	        url: '/tracks/youtube/:trackId',
	    templateUrl: 'modules/tracks/views/list-youtube.client.view.html'
	    }).
		state('listTracksFacebook', {
		    url: '/tracks/:trackId',
		    templateUrl: 'modules/tracks/views/list-tracks.client.view.html'
		}).
		state('listTracksTwitter', {
		    url: '/tracks/twitter/:trackId',
		    templateUrl: 'modules/tracks/views/list-twitter.client.view.html'
		}).
        state('listTracksInstagram', {
                url: '/tracks/instagram/:trackId',
                templateUrl: 'modules/tracks/views/list-instagram.client.view.html'
        }).
		state('editTrack', {
		    url: '/tracks/:trackId/edit',
		    templateUrl: 'modules/tracks/views/edit-track.client.view.html'
		});
	}
]);