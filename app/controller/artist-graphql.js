'use strict';

angular.module('etreedb')
.controller('ArtistGraphQLController', ['$location', '$scope', '$http', function($location, $scope, $http) {

	$scope.init = function()
	{
		$scope.query = { "query": "{ artist { id abbreviation name } }"};

		var url = API_URL + '/graphql?' + $.param($scope.query);
		$http({
			method: 'GET',
			url: url
		}).then(
			function successCallback(response) {
				$scope.data = response.data.data;
			}, function errorCallback(response) {
				alert('error');
			}
		);
	}

	$scope.load = function(artist)
	{
		$location.path('/artist/' + artist.id);
	}
}]);
