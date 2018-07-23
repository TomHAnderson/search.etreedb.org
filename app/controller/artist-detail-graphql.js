'use strict';

angular.module('etreedb')
.controller('ArtistDetailGraphQLController', [
	'$routeParams',
	'$scope',
	'$http',
	'$location',
	function($routeParams, $scope, $http, $location) {


	$scope.init = function()
	{
		$scope.query = { "query": "{ year: artist ( filter: { id: " + parseInt($routeParams.id) + "} )"
			+ "{ id name performance ( filter: { year_sort: \"desc\" year_distinct: true} ) { year } } "
			+ " artist ( filter: { id: " + parseInt($routeParams.id) + "} ) { id name } "
			+ " }"
		};

		var url = API_URL + '/graphql?' + $.param($scope.query);
		$http({
			method: 'GET',
			url: url
		}).then(
			function successCallback(response) {
				$scope.data = response.data.data;
				$scope.loadYear(response.data.data.year[0].performance[0].year);
			}, function errorCallback(response) {
				alert('error');
			}
		);
	}

	$scope.loadYear = function(year)
	{
		var query = { "query": "{ performance: artist ( filter: { id: " + parseInt($routeParams.id) + "} )"
			+ " { performance ( filter: { year: " + parseInt(year) + " performanceDate_sort: \"asc\" } ) "
			+ " { id performanceDate venue city state } } }" };

		$scope.performanceQuery = query;
		var url = API_URL + '/graphql?' + $.param(query);
		$http({
			method: 'GET',
			url: url
		}).then(
			function successCallback(response) {
				$scope.data.performance = response.data.data.performance[0].performance;
			}, function errorCallback(response) {
				alert('error');
			}
		);
	}
}]);
