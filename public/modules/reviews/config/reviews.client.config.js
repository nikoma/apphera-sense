'use strict';

// Configuring the Articles module
angular.module('reviews').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topbar', 'Reviews', 'reviews');

    }
]);
