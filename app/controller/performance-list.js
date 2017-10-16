'use strict';

angular.module('etreedb')
.controller('PerformanceListController', [
	'$routeParams',
	'$scope',
	'$http',
	'$location',
	function($routeParams, $scope, $http, $location) {

	$scope.init = function()
	{
		$scope.query = {
			"filter": [{
				"type": "innerjoin",
				"field": "artist",
				"alias": "artist"
			}],
			"order-by": []
		};
		$scope.load(API_URL + '/performance?' + $.param($scope.query));
	}

	$scope.filter = function(filter)
	{
		$scope.query.filter.unshift(filter);
		$scope.load(API_URL + '/performance?' + $.param($scope.query));
	}

	$scope.orderBy = function(filter)
	{
		$scope.query["order-by"].unshift(filter);
		$scope.load(API_URL + '/performance?' + $.param($scope.query));
	}

	$scope.load = function(url)
	{
		$http({
			method: 'GET',
			url: url
		}).then(
			function successCallback(response) {
				$scope.data = response.data;
			}, function errorCallback(response) {
				alert('error');
			}
		);
	}

	$scope.redirectToPerformance = function(performance)
	{
		$location.path('/performance/' + performance.id);
	}

}]);
