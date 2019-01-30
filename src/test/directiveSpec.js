"use strict";
describe("Testing directive.js ->", function () {
    var element, compile, rootScope, scope;

    beforeEach(function () {
        module("directive");
        inject(function ($injector) {
            rootScope = $injector.get("$rootScope");
            compile = $injector.get("$compile");
            element = angular.element("<this-is-the-user-directive data=\"user\"></this-is-the-user-directive>");
            scope = rootScope.$new();

            scope.$apply(function () {
                scope.user = {name: "John"};
                compile(element)(scope);
            });
        });
    });

    it("should name to be rendered:", function () {
        expect(element[0].innerText).toEqual("John");
    })
});