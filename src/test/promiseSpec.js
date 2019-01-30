"use strict";
describe("Testing promise.js ->", function () {
    var promiseFact, httpBackend, jsonResponse = ["hat", "book", "pen"];

    beforeEach(function () {
        module("promise");
        inject(function ($injector) {
            promiseFact = $injector.get("promiseFact");
            httpBackend = $injector.get("$httpBackend");
            httpBackend
                .whenGET("items.json")
                .respond(jsonResponse);
        });
    });

    it("should return all items:", function (done) {
        var promise = promiseFact.get();
        promise.then(function (response) {
            expect(response.data).toContain("hat");
            expect(response.data).toContain("book");
            expect(response.data).toContain("pen");
            done();
        });
        httpBackend.flush();
    });
});