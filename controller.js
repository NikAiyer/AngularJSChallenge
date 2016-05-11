	var myApp = angular.module("myApp", ['ngRoute']);
	myApp.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/list',
				{
					controller: 'SimpleController',
					templateUrl: 'Partials/list.html'
				})
			.otherwise({ redirectTo: '/list'});
	}]);
	myApp.controller('SimpleController', ['$scope', '$http', function ($scope, $http) {

		$http.get('listingsDataBlob.json').success(function(data){
			$scope.myData = data;
		})
	}]);
	
