"use strict";
namespace App {

    export let app = angular.module("app", [
        // Angular modules
        "ngAnimate",        // animations
        "ngRoute",          // routing
        "ngSanitize",       // sanitizes html bindings (ex: sidebarCtrl.js)

        // Custom modules
        "common",           // common functions, logger, spinner
        "common.bootstrap", // bootstrap dialog wrapper functions

        // 3rd Party Modules
        "breeze.angular",    // configures breeze for an angular app
        "breeze.directives", // contains the breeze validation directive (zValidate)
        "ui.bootstrap"       // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);

    // Handle routing errors and success events
    app.run(["$route", function ($route) {
        // Include $route to kick start the router.
    }]);

    app.controller("UserController", function ($scope, $http) {
        $http.get('http://localhost:59753/api/users').
            success(function (data, status, headers, config) {
                $scope.users = data;
            }).
            error(function (data, status, headers, config) {
                alert("error");
            });
    });
}