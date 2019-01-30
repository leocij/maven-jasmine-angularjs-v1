"use strict";

describe("Testing service.js ->", function () {
    var is;

    beforeEach(function () {
        module("service");
        inject(function ($injector) {
            is = $injector.get("serviceFact");
        });
    });

    it("should return all items:", function () {
        var items = is.get();
        expect(items).toContain("hat");
        expect(items).toContain("book");
        expect(items).toContain("pen");
        expect(items.length).toEqual(3);
    });
});