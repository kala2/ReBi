"use strict";
var App;
(function (App) {
    App.app = angular.module("app", [
        // Angular modules
        "ngAnimate",
        "ngRoute",
        "ngSanitize",
        // Custom modules
        "common",
        "common.bootstrap",
        // 3rd Party Modules
        "breeze.angular",
        "breeze.directives",
        "ui.bootstrap" // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);
    // Handle routing errors and success events
    App.app.run(["$route", function ($route) {
            // Include $route to kick start the router.
        }]);
    App.app.controller("UserController", function ($scope, $http) {
        $http.get('http://localhost:59753/api/users').
            success(function (data, status, headers, config) {
            $scope.users = data;
        }).
            error(function (data, status, headers, config) {
            alert("error");
        });
    });
})(App || (App = {}));
//# sourceMappingURL=app.js.map