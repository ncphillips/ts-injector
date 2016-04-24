var should = require("should");
describe("Binding", function () {
    var Injector = require("../injector");
    var injector;
    beforeEach(function () {
        injector = new Injector();
    });
    it("should not have bindings that were never set", function () {
        injector.hasBinding(someInterface()).should.be.false();
    });
    it("should have bindings after they are set", function () {
        injector.bind(someInterface(), someImpl());
        injector.hasBinding(someInterface()).should.be.true();
    });
    it("should return the expected modules", function () {
        injector.bind(someInterface(), someImpl());
        var impl = injector.get(someInterface());
        (impl).should.equal(require(someImpl()));
    });
    function someInterface() {
        return "ExampleInterface";
    }
    function someImpl() {
        return __dirname + "/ExampleImpl";
    }
});
//# sourceMappingURL=Injector.test.js.map