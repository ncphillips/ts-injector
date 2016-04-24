class Injector{
  private static bindings: {[key:string]:string} = {};
  public hasBinding(intrface: string): Boolean {
    return Injector.bindings.hasOwnProperty(intrface);
  }

  public bind(intrface: string, implementation: string): void {
    Injector.bindings[intrface] = implementation;
  }

  public get<T>(intrface: string): T {
    if (!this.hasBinding(intrface))
      throw new Error("Interface Binding Not Set");

    return <T>(require(Injector.bindings[intrface]));
  }
}

module.exports = Injector;
