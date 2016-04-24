class Injector {
  public getInstance(iname: String): NodeModule {
    return require("fs");
  }


  public hasBinding(iname: String): Boolean {
    return false;
  }
}

module.exports = Injector;
