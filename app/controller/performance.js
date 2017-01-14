'use strict';

angular.module('etreedb')
.controller('PerformanceController', [
	'$routeParams',
	'$scope',
	'$http',
	'$location',
	function($routeParams, $scope, $http, $location) {

	$scope.init = function()
	{
		$scope.load();
	}

	$scope.load = function()
	{
		$http({
			method: 'GET',
			url: API_URL + '/performance/' + $routeParams.id
		}).then(
			function successCallback(response) {
				$scope.performance = response.data;
				$scope.loadSources(response.data._embedded.source._links.self.href);
			}, function errorCallback(response) {
				alert('error');
			}
		);
	}

	$scope.loadSources = function(url)
	{
		$http({
			method: 'GET',
			url: url
		}).then(
			function successCallback(response) {
				console.log(response.data);
				$scope.sources = response.data;
			}, function errorCallback(response) {
				alert('error');
			}
		);
	}

}]);
