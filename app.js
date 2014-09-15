var myApp = angular.module('myApp',[]);

myApp.controller('MailListingCtrl', ['$scope', function($scope) {
 //  $scope.double = function(value) {
 //   return (value * 2); 
	// };
	

	$scope.email =[
		{
		to:"John DOe",
		from:"Dani Cool",
		message:"Sup John, what are you up to?"
		},
		{
		to:"Mark Grand",
		from:"Bobby Dinozzo",
		message:"Hurry up Dino!"
		},
		{
		to:"Babe Ruthy",
		from:"Sonny Chance",
		message:"Play that song, will ya?"
		}
	];
		

	
}]);
myApp.controller('HelloCtrl', ['$scope', function($scope) {
	$scope.name = 'Hello';
}]);