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
		$scope.projects = [];
		$http.get('resources/projects/json/code.json').success(function(data) {
			var row = -1;
			for (var i = 0; i < data.length; i++) {
				if (i % 3 == 0){
					$scope.projects.push([]);
					row++;
				}
				$scope.projects[row].push(data[i]);
			}
		});
	}]);

portfolio.controller('designController', ['$scope', '$http',
	function($scope, $http) {
		$scope.projects = [];
		$http.get('resources/projects/json/design.json').success(function(data) {
			var row = -1;
			for (var i = 0; i < data.length; i++) {
				if (i % 3 == 0){
					$scope.projects.push([]);
					row++;
				}
				$scope.projects[row].push(data[i]);
			}
		});
	}]);

portfolio.controller('gamesController', ['$scope', '$http',
	function($scope, $http) {
		$scope.projects = [];
		$http.get('resources/projects/json/games.json').success(function(data) {
			var row = -1;
			for (var i = 0; i < data.length; i++) {
				if (i % 3 == 0){
					$scope.projects.push([]);
					row++;
				}
				$scope.projects[row].push(data[i]);
			}
		});
	}]);

portfolio.controller('otherController', ['$scope', '$http',
	function($scope, $http) {
		$scope.projects = [];
		$http.get('resources/projects/json/other.json').success(function(data) {
			var row = -1;
			for (var i = 0; i < data.length; i++) {
				if (i % 3 == 0){
					$scope.projects.push([]);
					row++;
				}
				$scope.projects[row].push(data[i]);
			}
		});
	}]);

portfolio.controller('projectController', ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
		$scope.projectId = $routeParams.projectId;
		$http.get('resources/projects/json/' + $scope.projectId + '.json').success(function(data) {
			$scope.project = data;
			$scope.currImage = data.images[0];
			$scope.showImageRow = data.images.length > 1;
		});
		$scope.setImage = function(imageUrl) {
			$scope.currImage = imageUrl;
		};
	}]);