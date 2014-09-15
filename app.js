var myApp = angular.module('myApp',[]);

myApp.controller('MailListingCtrl', ['$scope','$http', function($scope,$http) {
 //  $scope.double = function(value) {
 //   return (value * 2); 
	// };
	

	$scope.email = [];
	$http({
		method: 'GET',
		url:'js/api/data.json'
	})
	.success(function(data,status,headers){
		$scope.email = data;
	})
	.error(function(data,status,headers){

	});
		

	
}]);
myApp.controller('HelloCtrl', ['$scope', function($scope) {
	$scope.name = 'Hello';
}]);