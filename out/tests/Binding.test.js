var should = require("should");
describe("Binding", function () {
    var Injector = require("../injector");
    var injector;
    beforeEach(function () {
        injector = new Injector();
    });
    it("should not have bindings that were never set", function () {
        (injector.hasBinding("somebinding")).should.be.false();
    });
});
//# sourceMappingURL=Binding.test.js.map