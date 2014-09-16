var myApp = angular.module('myApp',[]);

myApp.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.selectedMail;

	$scope.setSelectedMail = function(mail) {
		$scope.selectedMail = mail;
	};

	$scope.isSelected = function(mail) {
		if ($scope.selectedMail) {
			return $scope.selectedMail === mail;
		};
	};
}]);

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
myApp.controller('ContentCtrl', ['$scope', function($scope) {
	$scope.name = 'Hello';
}]);