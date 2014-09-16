var myApp = angular.module('myApp',[]);

myApp.controller('MailListingCtrl', ['$scope','$http', function($scope,$http) {
 //  $scope.double = function(value) {
 //   return (value * 2); 
	// };
	

	$scope.email = [];
	$http({
		method: 'GET',
		url:'bin/data/mail.json'
	})
	.success(function(data,status,headers){
		$scope.email = data.all;
	})
	.error(function(data,status,headers){

	});
		

	
}]);
myApp.controller('HelloCtrl', ['$scope', function($scope) {
	$scope.name = 'Hello';
}]);