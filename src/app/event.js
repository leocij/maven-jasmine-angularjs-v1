"use strict";

angular.module("event", [])
    .factory("eventFact", ["$rootScope", function ($rootScope) {
        var abc = {};

        abc.itemAdded = function (item) {
            $rootScope.$broadcast("item:added", item);
        };
        return abc;
    }])
    .controller("eventCtrl", function ($scope, $rootScope) {
        $rootScope.$on("item:added", function (event, item) {
            $scope.item = item;
        });
    });