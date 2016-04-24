# Injector

Injector is a TypeScript Dependency Injection module for use with Node.


Eg.ts

```

  interface Eg {
    name: String;
  }
```

EgImpl.ts

```
  class EgImpl implements Eg {
    public name: String;
    public age: Number;

    public constructor() {
      this.name = "Test";
      this.age = 2;
    }
  }

  module.exports = EgImpl;
```

app.js

```
  var Injector = require("ts-injector");

  var injector = new Injector();

  injector.bind("Eg", "EgImpl");

  var Eg = injector.get<Eg>("Eg");

  console.log(new Eg()); // {name: "Test", age: 2}
```
