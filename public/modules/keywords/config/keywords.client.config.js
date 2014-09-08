'use strict';

// Configuring the Articles module
angular.module('keywords').run(['Menus',
	function(Menus) {
		// Set top bar menu items
	    Menus.addMenuItem('topbar', 'Keywords', 'keywords', 'keywords');
		
	}
]);