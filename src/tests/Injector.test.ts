var should: Internal = require("should");

describe("Binding", () => {
  var Injector = require("../injector");

  var injector: Injector;

  beforeEach(() => {
    injector = new Injector();
  });

  it("should not have bindings that were never set", () => {
      injector.hasBinding(someInterface()).should.be.false();
  });

  it("should have bindings after they are set", () => {
    injector.bind(someInterface(), someImpl());

    injector.hasBinding(someInterface()).should.be.true();
  });

  it("should return the expected modules", () => {
    injector.bind(someInterface(), someImpl());

    var impl: ExampleImpl = injector.get<ExampleImpl>(someInterface());

    (impl).should.equal(require(someImpl()));
  });

  function someInterface(): string {
    return "ExampleInterface";
  }

  function someImpl(): string {
    return __dirname + "/ExampleImpl";
  }

});
