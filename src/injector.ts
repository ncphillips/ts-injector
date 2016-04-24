class Injector {
  private bindings: {[key:string]:string} = {};

  constructor(bindings?:{[key:string]:string}) {
    if (!bindings) {
      bindings = {};
    }

    this.bindings = bindings;
  }

  public hasBinding(intrface: string): Boolean {
    return this.bindings.hasOwnProperty(intrface);
  }

  public bind(intrface: string, implementation: string): void {
    this.bindings[intrface] = implementation;
  }

  public get<T>(intrface: string): T {
    if (!this.hasBinding(intrface))
      throw new Error("Interface Binding Not Set");

    return <T>(require(this.bindings[intrface]));
  }
}

module.exports = Injector;
