var portfolio = angular.module('portfolio', [
	'ngRoute'
	]);

//routing reference
// phonecatApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/phones', {
//         templateUrl: 'partials/phone-list.html',
//         controller: 'PhoneListCtrl'
//       }).
//       when('/phones/:phoneId', {
//         templateUrl: 'partials/phone-detail.html',
//         controller: 'PhoneDetailCtrl'
//       }).
//       otherwise({
//         redirectTo: '/phones'
//       });
//   }]);

portfolio.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'homeController'
			}).
			when('/code', {
				templateUrl: 'partials/code.html',
				controller: 'codeController'
			}).
			when('/design', {
				templateUrl: 'partials/design.html',
				controller: 'designController'
			}).
			when('/games', {
				templateUrl: 'partials/games.html',
				controller: 'gamesController'
			}).
			when('/other', {
				templateUrl: 'partials/other.html',
				controller: 'otherController'
			}).
			//further when clauses
			otherwise({
				redirectTo: '/home'
			});
	}]);

portfolio.controller('homeController', ['$scope',
	function($scope) {
		$scope.breetz = "breetz";
	}]);

portfolio.controller('codeController', ['$scope',
	function($scope) {
		$scope.breetz = "breetz";
	}]);

portfolio.controller('designController', ['$scope',
	function($scope) {
		$scope.breetz = "breetz";
	}]);

portfolio.controller('gamesController', ['$scope',
	function($scope) {
		$scope.breetz = "breetz";
	}]);

portfolio.controller('otherController', ['$scope',
	function($scope) {
		$scope.breetz = "breetz";
	}]);