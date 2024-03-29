'use strict';

$(function(){
    $('*[data-href]').on('click', function() {
        window.location = $(this).data('href');
        return false;
    });
});

angular.module('etreedb', ['ngRoute', 'angular-loading-bar', 'nl2br', 'edbFilter'])
.config([
	'$locationProvider',
	'$routeProvider',
	'$httpProvider',
	function($locationProvider, $routeProvider, $httpProvider) {
//		$httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
		$httpProvider.defaults.cache = false;

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
			.when('/performance', {
				templateUrl : 'template/performance-list.html',
				controller : 'PerformanceListController'
			})
			.when('/performance/:id', {
				templateUrl : 'template/performance.html',
				controller : 'PerformanceController'
			})
			.when('/source', {
				templateUrl : 'template/source-list.html',
				controller : 'SourceListController'
			})
			.when('/performance-search', {
				templateUrl : 'template/performance-search.html',
				controller : 'PerformanceSearchController'
			})
			.otherwise({redirectTo: '/'});

		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	}
])
.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };
}])
;
