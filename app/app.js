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
	function($locationProvider, $routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'template/home.html',
				controller : 'HomeController'
			})
			.when('/artist', {
				templateUrl : 'template/artist-graphql.html',
				controller : 'ArtistGraphQLController'
			})
			.when('/artist/:id', {
				templateUrl : 'template/artist-detail-graphql.html',
				controller : 'ArtistDetailGraphQLController'
			})
/*
			.when('/artist', {
				templateUrl : 'template/artist-list.html',
				controller : 'ArtistListController'
			})
			.when('/artist/:id', {
				templateUrl : 'template/artist.html',
				controller : 'ArtistController'
			})
*/
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
				templateUrl : 'template/search-performance.html',
				controller : 'SearchPerformanceController'
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
