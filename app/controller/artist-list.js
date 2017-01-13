'use strict';

angular.module('etreedb')
.controller('ArtistListController', ['$location', '$scope', '$http', function($location, $scope, $http) {

$scope.init = function()
{
	$scope.load();
}

$scope.redirectToArtist = function(artist)
{
	$location.path('/artist/' + artist.id);
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
