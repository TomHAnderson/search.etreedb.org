'use strict';

angular.module('etreedb')
.controller('PerformanceSearchController', [
	'$routeParams',
	'$scope',
	'$http',
	'$location',
	function($routeParams, $scope, $http, $location) {

	$scope.init = function()
	{
		$scope.load(API_URL + '/performance-search?search=' + $location.search().search);
		$scope.search = $location.search().search;
	}

	$scope.load = function(url)
	{
		$http({
			method: 'GET',
			url: url
		}).then(
			function successCallback(response) {
				$scope.search = $location.search().search;
				$scope.data = response.data;
			}, function errorCallback(response) {
				console.log(response);
				alert('error');
			}
		);
	}

	$scope.redirectToPerformance = function(performance)
	{
		$location.path('/performance/' + performance.id);
	}

}]);
