'use strict';

angular.module('etreedb')
.controller('ArtistController', [
	'$routeParams',
	'$scope',
	'$http',
	function($routeParams, $scope, $http) {

	$scope.init = function()
	{
		$scope.loadArtist();
		$scope.filters = { "filter": [], "order-by": [] };

		$scope.showFilterVenue = false;
		$scope.filterVenue = '';
		$scope.filterTypeVenue = 'eq';

		$scope.showFilterState = false;
		$scope.filterState = '';
		$scope.filterTypeState = 'eq';

		$scope.showFilterPerformanceDate = false;
		$scope.filterPerformanceDate = '';
		$scope.filterTypePerformanceDate = 'eq';

		$scope.showFilterYear = false;
		$scope.filterYear = '';
		$scope.filterTypeYear = 'eq';
	}

	$scope.loadArtist = function(url)
	{
		$http({
			method: 'GET',
			url: API_URL + '/artist/' + $routeParams.id
		}).then(
			function successCallback(response) {
				$scope.artist = response.data;
				$scope.filter({ 'type': 'eq', 'field': 'artist', 'value': $routeParams.id });
			}, function errorCallback(response) {
				alert('error');
			}
		);
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

}]);
