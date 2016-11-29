var app = angular.module("app", ["ngRoute"]);
app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when("/", {
        template : "<h1>Main</h1><p>Click on the links to change this content sumanta</p>"
    })
    .when("/red", {
        template : "<h1>RED</h1><p>Click on the links to change this content</p>"
    })
    .when("/green", {
        template : "<h1>Main</h1><p>Click on the links to change this content</p>"
    })
    .when("/blue", {
        template : "<h1>Main</h1><p>Click on the links to change this content</p>"
    });

  }
]);
