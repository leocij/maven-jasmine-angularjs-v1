"use strict";

angular.module("promise", [])
    .factory("promiseFact", ["$http", "$q", function ($http, $q) {
        var is = {};
        is.get = function () {
            var deferred = $q.defer();
            $http
                .get("items.json")
                .then(function (response) {
                    deferred.resolve(response);
                })
                .catch(function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };
        return is;
    }]);