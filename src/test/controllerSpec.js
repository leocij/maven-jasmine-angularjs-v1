"use strict";
describe("Testing controller.js ->", function () {
    var scope = {};

    beforeEach(function () {
        module("controller");
        inject(function ($controller) {
            $controller("controllerCtrl", {$scope: scope});
        });
    });

    it("should return \"Testing the controller!\":", function () {
        expect(scope.title).toEqual("Testing the controller!");
    });
});