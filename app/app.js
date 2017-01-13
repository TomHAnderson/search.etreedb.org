'use strict';

var API_URL = 'https://api.etreedb.org';

$(function(){
    $('*[data-href]').on('click', function() {
        window.location = $(this).data('href');
        return false;
    });
});

angular.module('etreedb', ['ngRoute', 'angular-loading-bar'])
.config([
	'$locationProvider',
	'$routeProvider',
	function($locationProvider, $routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'template/home.html',
				controller : 'HomeController'
			})
			.when('/artist', {
				templateUrl : 'template/artist-list.html',
				controller : 'ArtistListController'
			})
			.when('/artist/:id', {
				templateUrl : 'template/artist.html',
				controller : 'ArtistController'
			})
			.otherwise({redirectTo: '/'});

		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	}
])
;
