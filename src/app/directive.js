"use strict";
angular.module("directive", [])
    .directive("thisIsTheUserDirective", function () {
        return {
            restrict: "E",
            template: "<div>{{user.name}}</div>",
            scope: {user: "=data"},
            replace: true
        };
    });