var should: Internal = require("should");
describe("Binding", () => {
  var Injector = require("../injector");

  var injector: Injector;

  beforeEach(() => {
    injector = new Injector();
  });

  it("should not have bindings that were never set", () => {
      (injector.hasBinding("somebinding")).should.be.false();
  });

});
