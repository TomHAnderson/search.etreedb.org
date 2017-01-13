'use strict';

angular.module('etreedb')
.controller('ArtistController', [
	'$routeParams',
	'$scope',
	'$http',
	function($routeParams, $scope, $http) {

	$scope.init = function()
	{
		$scope.params = {};
		$scope.loadArtist();
	}

	$scope.loadArtist = function(url)
	{
		$http({
			method: 'GET',
			url: API_URL + '/artist/' + $routeParams.id
		}).then(
			function successCallback(response) {
				$scope.artist = response.data;
				$scope.loadPerformance({'filter': [{ 'type': 'eq', 'field': 'artist', 'value': $routeParams.id}]});
			}, function errorCallback(response) {
				alert('error');
			}
		);
	}

	$scope.orderBy = function(definition, label)
	{
		if ($scope.lastOrderByLabel == label) {
			$scope.lastOrderByDirection = ($scope.lastOrderByDirection == 'desc') ? 'asc': 'desc';
		} else {
			$scope.lastOrderByLabel = label;
			$scope.lastOrderByDirection = 'desc';
		}

		var defaults = {
			type: 'field',
			direction: $scope.lastOrderByDirection
		}

		$scope.loadPerformance({'order-by': [angular.merge(defaults, definition)]});
	}

	$scope.loadPerformance = function(params)
	{
		$scope.params = angular.merge($scope.params, params);

		$http({
			method: 'GET',
			url: API_URL + '/performance?' + $.param($scope.params)
		}).then(
			function successCallback(response) {
				$scope.performance = response.data;
			}, function errorCallback(response) {
				alert('error');
			}
		);
	}

	$scope.loadPerformanceByUrl = function(url)
	{
//		$scope.params = {'filter': [{ 'type': 'eq', 'field': 'artist', 'value': $routeParams.id}]};
		$http({
			method: 'GET',
			url: url
		}).then(
			function successCallback(response) {
				$scope.performance = response.data;
			}, function errorCallback(response) {
				alert('error');
			}
		);
	}

}]);
