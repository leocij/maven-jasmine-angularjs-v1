"use strict";
angular.module("service", [])
    .factory("serviceFact", function () {
        var is = {};
        is.get = function () {
            return ["hat", "book", "pen"];
        };
        return is;
    });