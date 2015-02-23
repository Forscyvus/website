var portfolio = angular.module('portfolio', [
	'ngRoute'
	]);

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
			when('/project/:projectId', {
				templateUrl: 'partials/project.html',
				controller: 'projectController'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);

portfolio.controller('homeController', ['$scope',
	function($scope) {
		$scope.breetz = "breetz";
	}]);

portfolio.controller('codeController', ['$scope', '$http',
	function($scope, $http) {
		$scope.projects = [[],[],[]];
		$http.get('resources/projects/json/code.json').success(function(data) {
			for (var i = 0; i < data.length; i++) {
				$scope.projects[i%3].push(data[i]);
			}
			
		});
		console.log($scope.projects);
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

portfolio.controller('projectController', ['$scope',
	function($scope) {
		$scope.breetz = "breetz";
	}]);