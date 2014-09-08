'use strict';

// Configuring the Articles module
angular.module('organizations').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Organizations', 'organizations', 'dropdown', '/organizations(/create)?');
		Menus.addSubMenuItem('topbar', 'organizations', 'List Organizations', 'organizations');
		Menus.addSubMenuItem('topbar', 'organizations', 'Add Organization', 'organizations/create');      
    }
]);
