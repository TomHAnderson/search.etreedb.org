'use strict';

angular.module('etreedb')
.controller('ArtistListController', ['$location', '$scope', '$http', function($location, $scope, $http) {

	$scope.init = function()
	{
		$scope.query = { "filter": [], "order-by": [] };
		$scope.load(API_URL + '/artist?' + $.param($scope.query));
	}

	$scope.redirectToArtist = function(artist)
	{
		$location.path('/artist/' + artist.id);
	}

	$scope.filter = function(filter)
	{
		$scope.query.filter.unshift(filter);
		$scope.load(API_URL + '/artist?' + $.param($scope.query));
	}

	$scope.orderBy = function(filter)
	{
		$scope.query["order-by"].unshift(filter);
		$scope.load(API_URL + '/artist?' + $.param($scope.query));
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
console.log(response);
				alert('error');
			}
		);
	}
}]);
