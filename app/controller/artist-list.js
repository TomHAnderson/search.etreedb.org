'use strict';

angular.module('etreedb')
.controller('ArtistListController', ['$location', '$scope', '$http', function($location, $scope, $http) {

$scope.init = function()
{
	$scope.load();
	$scope.filters = { "filter": [], "order-by": [] };

	$scope.showFilterName = false;
	$scope.filterName = '';
	$scope.filterTypeName = 'eq';

	$scope.showFilterAbbreviation = false;
	$scope.filterAbbreviation = '';
	$scope.filterTypeAbbreviation = 'eq';
}

$scope.redirectToArtist = function(artist)
{
	$location.path('/artist/' + artist.id);
}

$scope.filter = function(filter)
{
	$scope.filters.filter.unshift(filter);
	$scope.load(API_URL + '/artist?' + $.param($scope.filters));
}

$scope.load = function(url)
{
	if (! url) {
		url = API_URL + '/artist';
	}

	$http({
		method: 'GET',
		url: url
	}).then(
		function successCallback(response) {
			$scope.data = response.data;

			console.log(response.data);
		}, function errorCallback(response) {
			alert('error');
		}
	);
}

}]);
