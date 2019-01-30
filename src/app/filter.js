"use strict";

angular.module("filter", [])
    .filter("reverseFilter", [function () {
        return function (string) {
            return string.split("").reverse().join("");
        };
    }]);