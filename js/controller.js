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

    	$('.fancybox-thumbs').fancybox({
                prevEffect : 'none',
                nextEffect : 'none',

                closeBtn  : true,
                arrows    : false,
                nextClick : true,                

                helpers : {
                    thumbs : {
                        width  : 50,
                        height : 50
                    }
                }
        });

 		$scope.startsWith = function (actual, expected) {
    		var lowerStr = (actual + "").toLowerCase();
    		return lowerStr.indexOf(expected.toLowerCase()) === 0;
  		}

		$http.get('listingsDataBlob.json')
			.success(function(data){
				$scope.valid = true;
				$scope.myData = data;
			})
			.error(function(data){
				$scope.valid = false;
			})

		$scope.inside = "Inside Controller"

		

	}]);



