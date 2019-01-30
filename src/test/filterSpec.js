"use strict";
describe("Testing filter.js ->", function () {
    var reverse;

    beforeEach(function () {
        module("filter");
        inject(function ($filter) {
            reverse = $filter("reverseFilter");
        });
    });

    it("should reverse a string:", function () {
        expect(reverse("teste")).toBe("etset");
        expect(reverse("passou")).toBe("uossap");
        expect(reverse("Deu certo")).toBe("otrec ueD");
    });
});