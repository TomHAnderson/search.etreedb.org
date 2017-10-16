'use strict';

angular.module('etreedb')
.controller('SourceListController', [
	'$routeParams',
	'$scope',
	'$http',
	'$location',
	function($routeParams, $scope, $http, $location) {

	$scope.init = function()
	{
		$scope.filters = {
			"filter": [{
				"type": "innerjoin",
				"field": "artist",
				"alias": "artist"
			}],
			"order-by": []
		};
		$scope.load(API_URL + '/performance?' + $.param($scope.filters));
	}

	$scope.filter = function(filter)
	{
		$scope.filters.filter.unshift(filter);
		$scope.load(API_URL + '/performance?' + $.param($scope.filters));
	}

	$scope.load = function(url)
	{
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

	$scope.redirectToPerformance = function(performance)
	{
		$location.path('/performance/' + performance.id);
	}

}]);
