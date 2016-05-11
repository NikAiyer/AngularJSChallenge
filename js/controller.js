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

		$http.get('listingsDataBlob.json').success(function(data){
			$scope.myData = data;
		})

		

	}]);

	myApp.filter('myfilter', function() {
   
   		function strStartsWith(str, prefix) {
    		return (str+"").indexOf(prefix) === 0;
   		}
   
   
   		return function( items, amount) {
    
    		var filtered = [];
    
    		angular.forEach(items, function(item) {
      			if(strStartsWith(item.amount, amount)){
        			filtered.push(item);
      			}
    		});
  
    		return filtered;
  		};
	});

	myApp.filter('startsWith', function() {
    return function(items, prefix, itemProperty) {
      return items.filter(function(item) {
        var findIn = itemProperty ? item[itemProperty] : item;
        return findIn.toString().indexOf(prefix) === 0;
      });
    };
  })


