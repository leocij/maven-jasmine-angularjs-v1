"use strict";
describe("Testing event.js ->", function () {
    var eventFact, rootScope, scope, controller, item = {name: "Pillow", id: 1};

    beforeEach(function () {
        module("event");
        inject(function ($injector) {
            eventFact = $injector.get("eventFact");
            rootScope = $injector.get("$rootScope");
            controller = $injector.get("$controller");
            scope = rootScope.$new();
        });

        spyOn(rootScope, "$broadcast").and.callThrough();
        spyOn(rootScope, "$on").and.callThrough();
    });

    it("should broadcast item - added message:", function () {
        rootScope.$broadcast.and.stub();
        eventFact.itemAdded(item);
        expect(rootScope.$broadcast).toHaveBeenCalled();
        expect(rootScope.$broadcast).toHaveBeenCalledWith("item:added", item);
    });

    it("should trigger item - added listener:", function () {
        controller("eventCtrl", {$scope: scope});
        eventFact.itemAdded(item);
        expect(rootScope.$on).toHaveBeenCalled();
        expect(rootScope.$on).toHaveBeenCalledWith("item:added", jasmine.any(Function));
        expect(scope.item).toEqual(item);
    });
});