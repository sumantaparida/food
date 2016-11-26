// Create Module and name
var foodapp = angular.module('foodapp', ['ngRoute']);

angular.module('ng').filter('tel', function (){});
// Configure our Router
foodapp.config(function($routerProvider) {
		$routerProvider

		// route for the home page
		.when('/', {
			templateUrl	:	'pages/home.html',
      controller  : 'MainController'
		})
    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'AboutController'
    })
    // route for the services page
    // route for the contact page
    .otherwise({redirectTo: '/'});

});

// create the controller and inject Angular's $scope
foodapp.controller('MainController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

foodapp.controller('AboutController', function($scope) {
  $scope.message = 'Hello from AboutController';
});
